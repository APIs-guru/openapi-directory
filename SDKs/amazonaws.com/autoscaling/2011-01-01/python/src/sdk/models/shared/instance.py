from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from . import *


@dataclass
class Instance:
    r"""Instance
    Describes an EC2 instance.
    """
    
    availability_zone: str = field()
    health_status: str = field()
    instance_id: str = field()
    lifecycle_state: LifecycleStateEnum = field()
    protected_from_scale_in: bool = field()
    instance_type: Optional[str] = field(default=None)
    launch_configuration_name: Optional[str] = field(default=None)
    launch_template: Optional[LaunchTemplateSpecification] = field(default=None)
    weighted_capacity: Optional[str] = field(default=None)
    
