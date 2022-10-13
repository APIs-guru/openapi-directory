from dataclasses import dataclass, field
from typing import Enum

class DatePartitionDelimiterValueEnum(str, Enum):
    SLASH = "SLASH"
    UNDERSCORE = "UNDERSCORE"
    DASH = "DASH"
    NONE = "NONE"

