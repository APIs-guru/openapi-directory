from dataclasses import dataclass, field
from enum import Enum

class ScalingAdjustmentTypeEnum(str, Enum):
    CHANGE_IN_CAPACITY = "ChangeInCapacity"
    EXACT_CAPACITY = "ExactCapacity"
    PERCENT_CHANGE_IN_CAPACITY = "PercentChangeInCapacity"

