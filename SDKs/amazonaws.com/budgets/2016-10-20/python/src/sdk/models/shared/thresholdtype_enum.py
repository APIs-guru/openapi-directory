from dataclasses import dataclass, field
from enum import Enum

class ThresholdTypeEnum(str, Enum):
    PERCENTAGE = "PERCENTAGE"
    ABSOLUTE_VALUE = "ABSOLUTE_VALUE"

