from dataclasses import dataclass, field
from enum import Enum

class RangeModeEnum(str, Enum):
    FIRST = "FIRST"
    LAST = "LAST"
    LAST_BEFORE_MISSING_VALUES = "LAST_BEFORE_MISSING_VALUES"
    INCLUSIVE = "INCLUSIVE"
    EXCLUSIVE = "EXCLUSIVE"

