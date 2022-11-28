from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from . import *


@dataclass
class InstanceEventWindowStateChange:
    r"""InstanceEventWindowStateChange
    The state of the event window.
    """
    
    instance_event_window_id: Optional[str] = field(default=None)
    state: Optional[InstanceEventWindowStateEnum] = field(default=None)
    
