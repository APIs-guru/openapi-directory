from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from . import *


@dataclass
class WarmPoolConfiguration:
    r"""WarmPoolConfiguration
    Describes a warm pool configuration. 
    """
    
    max_group_prepared_capacity: Optional[int] = field(default=None)
    min_size: Optional[int] = field(default=None)
    pool_state: Optional[WarmPoolStateEnum] = field(default=None)
    status: Optional[WarmPoolStatusEnum] = field(default=None)
    
