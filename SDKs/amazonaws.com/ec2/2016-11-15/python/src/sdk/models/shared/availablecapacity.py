from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class AvailableCapacity:
    r"""AvailableCapacity
    The capacity information for instances that can be launched onto the Dedicated Host. 
    """
    
    available_instance_capacity: Optional[List[InstanceCapacity]] = field(default=None)
    available_v_cpus: Optional[int] = field(default=None)
    
