from dataclasses import dataclass, field
from typing import Enum

class MetricAggregationTypeEnum(str, Enum):
    AVERAGE = "Average"
    MINIMUM = "Minimum"
    MAXIMUM = "Maximum"

