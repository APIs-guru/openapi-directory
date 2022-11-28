from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from . import *


@dataclass
class InstanceCount:
    r"""InstanceCount
    Describes a Reserved Instance listing state.
    """
    
    instance_count: Optional[int] = field(default=None)
    state: Optional[ListingStateEnum] = field(default=None)
    
