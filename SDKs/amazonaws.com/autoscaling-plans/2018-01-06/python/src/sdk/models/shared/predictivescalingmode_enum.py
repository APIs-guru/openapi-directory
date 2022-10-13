from dataclasses import dataclass, field
from typing import Enum

class PredictiveScalingModeEnum(str, Enum):
    FORECAST_AND_SCALE = "ForecastAndScale"
    FORECAST_ONLY = "ForecastOnly"

