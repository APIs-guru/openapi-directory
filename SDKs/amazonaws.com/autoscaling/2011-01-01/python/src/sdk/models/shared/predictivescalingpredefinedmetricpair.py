from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from . import *


@dataclass
class PredictiveScalingPredefinedMetricPair:
    r"""PredictiveScalingPredefinedMetricPair
    Represents a metric pair for a predictive scaling policy. 
    """
    
    predefined_metric_type: PredefinedMetricPairTypeEnum = field()
    resource_label: Optional[str] = field(default=None)
    
