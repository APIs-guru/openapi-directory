from dataclasses import dataclass, field
from enum import Enum

class QuotaPeriodTypeEnum(str, Enum):
    DAY = "DAY"
    WEEK = "WEEK"
    MONTH = "MONTH"

