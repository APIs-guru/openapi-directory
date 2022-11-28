from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class TargetTrackingConfiguration:
    r"""TargetTrackingConfiguration
    Represents a target tracking scaling policy configuration to use with Amazon EC2 Auto Scaling.
    """
    
    target_value: float = field()
    customized_metric_specification: Optional[CustomizedMetricSpecification] = field(default=None)
    disable_scale_in: Optional[bool] = field(default=None)
    predefined_metric_specification: Optional[PredefinedMetricSpecification] = field(default=None)
    
