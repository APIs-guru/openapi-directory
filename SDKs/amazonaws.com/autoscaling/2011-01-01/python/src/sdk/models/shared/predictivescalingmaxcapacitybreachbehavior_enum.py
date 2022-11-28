from dataclasses import dataclass, field
from enum import Enum

class PredictiveScalingMaxCapacityBreachBehaviorEnum(str, Enum):
    HONOR_MAX_CAPACITY = "HonorMaxCapacity"
    INCREASE_MAX_CAPACITY = "IncreaseMaxCapacity"

