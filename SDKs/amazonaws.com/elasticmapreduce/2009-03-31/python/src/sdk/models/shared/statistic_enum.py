from dataclasses import dataclass, field
from typing import Enum

class StatisticEnum(str, Enum):
    SAMPLE_COUNT = "SAMPLE_COUNT"
    AVERAGE = "AVERAGE"
    SUM = "SUM"
    MINIMUM = "MINIMUM"
    MAXIMUM = "MAXIMUM"

