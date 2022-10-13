from dataclasses import dataclass, field
from typing import Enum

class ThresholdTypeEnum(str, Enum):
    PERCENTAGE = "PERCENTAGE"
    ABSOLUTE_VALUE = "ABSOLUTE_VALUE"

