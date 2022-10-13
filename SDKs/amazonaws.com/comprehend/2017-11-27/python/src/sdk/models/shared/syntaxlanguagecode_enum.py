from dataclasses import dataclass, field
from typing import Enum

class SyntaxLanguageCodeEnum(str, Enum):
    EN = "en"
    ES = "es"
    FR = "fr"
    DE = "de"
    IT = "it"
    PT = "pt"

