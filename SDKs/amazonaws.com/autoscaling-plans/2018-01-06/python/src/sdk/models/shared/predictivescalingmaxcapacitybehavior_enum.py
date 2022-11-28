from dataclasses import dataclass, field
from enum import Enum

class PredictiveScalingMaxCapacityBehaviorEnum(str, Enum):
    SET_FORECAST_CAPACITY_TO_MAX_CAPACITY = "SetForecastCapacityToMaxCapacity"
    SET_MAX_CAPACITY_TO_FORECAST_CAPACITY = "SetMaxCapacityToForecastCapacity"
    SET_MAX_CAPACITY_ABOVE_FORECAST_CAPACITY = "SetMaxCapacityAboveForecastCapacity"

