from dataclasses import dataclass, field
from enum import Enum

class PredictiveScalingModeEnum(str, Enum):
    FORECAST_AND_SCALE = "ForecastAndScale"
    FORECAST_ONLY = "ForecastOnly"

