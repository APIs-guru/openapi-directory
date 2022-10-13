from dataclasses import dataclass, field
from typing import Enum

class ChangeTypeEnumEnum(str, Enum):
    A = "A"
    M = "M"
    D = "D"

