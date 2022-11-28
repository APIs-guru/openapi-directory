from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from . import *


@dataclass
class FleetLaunchTemplateOverrides:
    r"""FleetLaunchTemplateOverrides
    Describes overrides for a launch template.
    """
    
    availability_zone: Optional[str] = field(default=None)
    instance_type: Optional[InstanceTypeEnum] = field(default=None)
    max_price: Optional[str] = field(default=None)
    placement: Optional[PlacementResponse] = field(default=None)
    priority: Optional[float] = field(default=None)
    subnet_id: Optional[str] = field(default=None)
    weighted_capacity: Optional[float] = field(default=None)
    
