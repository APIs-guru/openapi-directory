from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List
from . import *


@dataclass
class GetPredictiveScalingForecastAnswer:
    capacity_forecast: CapacityForecast = field()
    load_forecast: List[LoadForecast] = field()
    update_time: datetime = field()
    
