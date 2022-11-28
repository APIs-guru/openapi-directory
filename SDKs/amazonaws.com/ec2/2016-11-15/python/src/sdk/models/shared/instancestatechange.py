from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class InstanceStateChange:
    r"""InstanceStateChange
    Describes an instance state change.
    """
    
    current_state: Optional[InstanceState] = field(default=None)
    instance_id: Optional[str] = field(default=None)
    previous_state: Optional[InstanceState] = field(default=None)
    
