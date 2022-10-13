from dataclasses import dataclass, field
from typing import Enum

class MetricStatisticEnum(str, Enum):
    MAXIMUM = "Maximum"
    AVERAGE = "Average"

