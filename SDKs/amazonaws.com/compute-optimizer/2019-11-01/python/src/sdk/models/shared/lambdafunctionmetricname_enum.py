from dataclasses import dataclass, field
from enum import Enum

class LambdaFunctionMetricNameEnum(str, Enum):
    DURATION = "Duration"
    MEMORY = "Memory"

