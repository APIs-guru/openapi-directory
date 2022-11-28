from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from . import *


@dataclass
class AutoScalingGroup:
    r"""AutoScalingGroup
    Describes an Auto Scaling group.
    """
    
    auto_scaling_group_name: str = field()
    availability_zones: List[str] = field()
    created_time: datetime = field()
    default_cooldown: int = field()
    desired_capacity: int = field()
    health_check_type: str = field()
    max_size: int = field()
    min_size: int = field()
    auto_scaling_group_arn: Optional[str] = field(default=None)
    capacity_rebalance: Optional[bool] = field(default=None)
    context: Optional[str] = field(default=None)
    enabled_metrics: Optional[List[EnabledMetric]] = field(default=None)
    health_check_grace_period: Optional[int] = field(default=None)
    instances: Optional[List[Instance]] = field(default=None)
    launch_configuration_name: Optional[str] = field(default=None)
    launch_template: Optional[LaunchTemplateSpecification] = field(default=None)
    load_balancer_names: Optional[List[str]] = field(default=None)
    max_instance_lifetime: Optional[int] = field(default=None)
    mixed_instances_policy: Optional[MixedInstancesPolicy] = field(default=None)
    new_instances_protected_from_scale_in: Optional[bool] = field(default=None)
    placement_group: Optional[str] = field(default=None)
    predicted_capacity: Optional[int] = field(default=None)
    service_linked_role_arn: Optional[str] = field(default=None)
    status: Optional[str] = field(default=None)
    suspended_processes: Optional[List[SuspendedProcess]] = field(default=None)
    tags: Optional[List[TagDescription]] = field(default=None)
    target_group_ar_ns: Optional[List[str]] = field(default=None)
    termination_policies: Optional[List[str]] = field(default=None)
    vpc_zone_identifier: Optional[str] = field(default=None)
    warm_pool_configuration: Optional[WarmPoolConfiguration] = field(default=None)
    warm_pool_size: Optional[int] = field(default=None)
    
