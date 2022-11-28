from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from . import *


@dataclass
class ReservedInstancesConfiguration:
    r"""ReservedInstancesConfiguration
    Describes the configuration settings for the modified Reserved Instances.
    """
    
    availability_zone: Optional[str] = field(default=None)
    instance_count: Optional[int] = field(default=None)
    instance_type: Optional[InstanceTypeEnum] = field(default=None)
    platform: Optional[str] = field(default=None)
    scope: Optional[ScopeEnum] = field(default=None)
    
