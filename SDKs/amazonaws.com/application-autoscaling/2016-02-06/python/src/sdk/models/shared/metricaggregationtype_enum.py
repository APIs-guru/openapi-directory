from dataclasses import dataclass, field
from enum import Enum

class MetricAggregationTypeEnum(str, Enum):
    AVERAGE = "Average"
    MINIMUM = "Minimum"
    MAXIMUM = "Maximum"

