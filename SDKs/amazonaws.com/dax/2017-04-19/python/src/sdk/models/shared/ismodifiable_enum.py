from dataclasses import dataclass, field
from typing import Enum

class IsModifiableEnum(str, Enum):
    TRUE = "TRUE"
    FALSE = "FALSE"
    CONDITIONAL = "CONDITIONAL"

