// Dark/Light mode toggle
const btn = document.getElementById("toggleTheme");
const body = document.getElementById("body");

btn.addEventListener("click", () => {
  body.classList.toggle("bg-gray-900");
  body.classList.toggle("text-white");
  body.classList.toggle("text-gray-800");
  body.classList.toggle("bg-gray-100");

  // ubah text tombol
  if (body.classList.contains("bg-gray-900")) {
    btn.textContent = "☀️ Mode";
    btn.classList.remove("text-blue-600");
    btn.classList.add("text-yellow-500");
  } else {
    btn.textContent = "🌙 Mode";
    btn.classList.remove("text-yellow-500");
    btn.classList.add("text-blue-600");
  }
});
