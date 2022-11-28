from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List
from . import *


@dataclass
class LoadForecast:
    r"""LoadForecast
    A <code>GetPredictiveScalingForecast</code> call returns the load forecast for a predictive scaling policy. This structure includes the data points for that load forecast, along with the timestamps of those data points and the metric specification. 
    """
    
    metric_specification: PredictiveScalingMetricSpecification = field()
    timestamps: List[datetime] = field()
    values: List[float] = field()
    
