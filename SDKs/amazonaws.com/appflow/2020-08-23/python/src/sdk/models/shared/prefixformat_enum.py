from dataclasses import dataclass, field
from typing import Enum

class PrefixFormatEnum(str, Enum):
    YEAR = "YEAR"
    MONTH = "MONTH"
    DAY = "DAY"
    HOUR = "HOUR"
    MINUTE = "MINUTE"

