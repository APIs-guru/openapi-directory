from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from . import *


@dataclass
class SpotPlacement:
    r"""SpotPlacement
    Describes Spot Instance placement.
    """
    
    availability_zone: Optional[str] = field(default=None)
    group_name: Optional[str] = field(default=None)
    tenancy: Optional[TenancyEnum] = field(default=None)
    
