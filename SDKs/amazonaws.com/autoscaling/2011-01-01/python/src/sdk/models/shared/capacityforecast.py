from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List


@dataclass
class CapacityForecast:
    r"""CapacityForecast
    A <code>GetPredictiveScalingForecast</code> call returns the capacity forecast for a predictive scaling policy. This structure includes the data points for that capacity forecast, along with the timestamps of those data points. 
    """
    
    timestamps: List[datetime] = field()
    values: List[float] = field()
    
