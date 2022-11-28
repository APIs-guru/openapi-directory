from dataclasses import dataclass, field
from enum import Enum

class CharLengthSemanticsEnum(str, Enum):
    DEFAULT = "default"
    CHAR = "char"
    BYTE = "byte"

