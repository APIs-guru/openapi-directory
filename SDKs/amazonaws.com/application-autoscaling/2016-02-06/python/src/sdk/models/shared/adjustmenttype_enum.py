from dataclasses import dataclass, field
from enum import Enum

class AdjustmentTypeEnum(str, Enum):
    CHANGE_IN_CAPACITY = "ChangeInCapacity"
    PERCENT_CHANGE_IN_CAPACITY = "PercentChangeInCapacity"
    EXACT_CAPACITY = "ExactCapacity"

