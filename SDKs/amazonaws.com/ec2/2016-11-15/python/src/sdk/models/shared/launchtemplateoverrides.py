from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from . import *


@dataclass
class LaunchTemplateOverrides:
    r"""LaunchTemplateOverrides
    Describes overrides for a launch template.
    """
    
    availability_zone: Optional[str] = field(default=None)
    instance_type: Optional[InstanceTypeEnum] = field(default=None)
    priority: Optional[float] = field(default=None)
    spot_price: Optional[str] = field(default=None)
    subnet_id: Optional[str] = field(default=None)
    weighted_capacity: Optional[float] = field(default=None)
    
