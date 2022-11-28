from dataclasses import dataclass, field
from enum import Enum

class LambdaFunctionMemoryMetricStatisticEnum(str, Enum):
    LOWER_BOUND = "LowerBound"
    UPPER_BOUND = "UpperBound"
    EXPECTED = "Expected"

