from dataclasses import dataclass, field
from typing import Enum

class ScalingAdjustmentTypeEnum(str, Enum):
    CHANGE_IN_CAPACITY = "ChangeInCapacity"
    EXACT_CAPACITY = "ExactCapacity"
    PERCENT_CHANGE_IN_CAPACITY = "PercentChangeInCapacity"

