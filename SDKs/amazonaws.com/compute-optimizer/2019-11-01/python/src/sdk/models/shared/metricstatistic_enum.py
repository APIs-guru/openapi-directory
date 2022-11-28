from dataclasses import dataclass, field
from enum import Enum

class MetricStatisticEnum(str, Enum):
    MAXIMUM = "Maximum"
    AVERAGE = "Average"

