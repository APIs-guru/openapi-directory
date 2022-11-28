from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from . import *


@dataclass
class InstanceTypeOffering:
    r"""InstanceTypeOffering
    The instance types offered.
    """
    
    instance_type: Optional[InstanceTypeEnum] = field(default=None)
    location: Optional[str] = field(default=None)
    location_type: Optional[LocationTypeEnum] = field(default=None)
    
