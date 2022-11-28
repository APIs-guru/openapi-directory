from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class ScalingPolicy:
    r"""ScalingPolicy
    Describes a scaling policy.
    """
    
    adjustment_type: Optional[str] = field(default=None)
    alarms: Optional[List[Alarm]] = field(default=None)
    auto_scaling_group_name: Optional[str] = field(default=None)
    cooldown: Optional[int] = field(default=None)
    enabled: Optional[bool] = field(default=None)
    estimated_instance_warmup: Optional[int] = field(default=None)
    metric_aggregation_type: Optional[str] = field(default=None)
    min_adjustment_magnitude: Optional[int] = field(default=None)
    min_adjustment_step: Optional[int] = field(default=None)
    policy_arn: Optional[str] = field(default=None)
    policy_name: Optional[str] = field(default=None)
    policy_type: Optional[str] = field(default=None)
    predictive_scaling_configuration: Optional[PredictiveScalingConfiguration] = field(default=None)
    scaling_adjustment: Optional[int] = field(default=None)
    step_adjustments: Optional[List[StepAdjustment]] = field(default=None)
    target_tracking_configuration: Optional[TargetTrackingConfiguration] = field(default=None)
    
