from dataclasses import dataclass, field
from enum import Enum

class ScalingTypeEnum(str, Enum):
    AUTO = "Auto"
    LINEAR = "Linear"
    LOGARITHMIC = "Logarithmic"
    REVERSE_LOGARITHMIC = "ReverseLogarithmic"

