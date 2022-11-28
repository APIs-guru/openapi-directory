from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from . import *


@dataclass
class PredictiveScalingConfiguration:
    r"""PredictiveScalingConfiguration
    Represents a predictive scaling policy configuration to use with Amazon EC2 Auto Scaling.
    """
    
    metric_specifications: List[PredictiveScalingMetricSpecification] = field()
    max_capacity_breach_behavior: Optional[PredictiveScalingMaxCapacityBreachBehaviorEnum] = field(default=None)
    max_capacity_buffer: Optional[int] = field(default=None)
    mode: Optional[PredictiveScalingModeEnum] = field(default=None)
    scheduling_buffer_time: Optional[int] = field(default=None)
    
