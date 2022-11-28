from dataclasses import dataclass, field
from enum import Enum

class LambdaFunctionMetricStatisticEnum(str, Enum):
    MAXIMUM = "Maximum"
    AVERAGE = "Average"

