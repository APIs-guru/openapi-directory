from dataclasses import dataclass, field
from enum import Enum

class DatePartitionDelimiterValueEnum(str, Enum):
    SLASH = "SLASH"
    UNDERSCORE = "UNDERSCORE"
    DASH = "DASH"
    NONE = "NONE"

