from dataclasses import dataclass, field
from typing import Enum

class LambdaFunctionMetricNameEnum(str, Enum):
    DURATION = "Duration"
    MEMORY = "Memory"

