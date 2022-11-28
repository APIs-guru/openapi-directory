from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class AutoScalingInstanceDetails:
    r"""AutoScalingInstanceDetails
    Describes an EC2 instance associated with an Auto Scaling group.
    """
    
    auto_scaling_group_name: str = field()
    availability_zone: str = field()
    health_status: str = field()
    instance_id: str = field()
    lifecycle_state: str = field()
    protected_from_scale_in: bool = field()
    instance_type: Optional[str] = field(default=None)
    launch_configuration_name: Optional[str] = field(default=None)
    launch_template: Optional[LaunchTemplateSpecification] = field(default=None)
    weighted_capacity: Optional[str] = field(default=None)
    
