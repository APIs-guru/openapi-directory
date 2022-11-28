from dataclasses import dataclass, field
from enum import Enum

class ForecastDataTypeEnum(str, Enum):
    CAPACITY_FORECAST = "CapacityForecast"
    LOAD_FORECAST = "LoadForecast"
    SCHEDULED_ACTION_MIN_CAPACITY = "ScheduledActionMinCapacity"
    SCHEDULED_ACTION_MAX_CAPACITY = "ScheduledActionMaxCapacity"

