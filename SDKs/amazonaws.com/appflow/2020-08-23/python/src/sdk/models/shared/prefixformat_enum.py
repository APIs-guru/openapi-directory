from dataclasses import dataclass, field
from enum import Enum

class PrefixFormatEnum(str, Enum):
    YEAR = "YEAR"
    MONTH = "MONTH"
    DAY = "DAY"
    HOUR = "HOUR"
    MINUTE = "MINUTE"

