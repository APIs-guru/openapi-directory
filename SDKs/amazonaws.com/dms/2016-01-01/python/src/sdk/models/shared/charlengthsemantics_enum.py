from dataclasses import dataclass, field
from typing import Enum

class CharLengthSemanticsEnum(str, Enum):
    DEFAULT = "default"
    CHAR = "char"
    BYTE = "byte"

