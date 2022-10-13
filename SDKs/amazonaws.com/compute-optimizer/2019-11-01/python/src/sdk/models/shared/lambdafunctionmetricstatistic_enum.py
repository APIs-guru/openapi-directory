from dataclasses import dataclass, field
from typing import Enum

class LambdaFunctionMetricStatisticEnum(str, Enum):
    MAXIMUM = "Maximum"
    AVERAGE = "Average"

