from dataclasses import dataclass, field
from enum import Enum

class IsModifiableEnum(str, Enum):
    TRUE = "TRUE"
    FALSE = "FALSE"
    CONDITIONAL = "CONDITIONAL"

