from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from . import *


@dataclass
class PredefinedMetricSpecification:
    r"""PredefinedMetricSpecification
    Represents a predefined metric for a target tracking scaling policy to use with Amazon EC2 Auto Scaling.
    """
    
    predefined_metric_type: MetricTypeEnum = field()
    resource_label: Optional[str] = field(default=None)
    
