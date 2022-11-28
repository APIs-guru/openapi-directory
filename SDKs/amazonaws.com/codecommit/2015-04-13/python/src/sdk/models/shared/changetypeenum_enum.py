from dataclasses import dataclass, field
from enum import Enum

class ChangeTypeEnumEnum(str, Enum):
    A = "A"
    M = "M"
    D = "D"

