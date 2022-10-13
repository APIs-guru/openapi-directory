from dataclasses import dataclass, field
from typing import Enum

class MetricStatisticEnum(str, Enum):
    AVERAGE = "Average"
    MINIMUM = "Minimum"
    MAXIMUM = "Maximum"
    SAMPLE_COUNT = "SampleCount"
    SUM = "Sum"

