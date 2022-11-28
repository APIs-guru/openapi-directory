from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class DeleteInstanceEventWindowResult:
    instance_event_window_state: Optional[InstanceEventWindowStateChange] = field(default=None)
    
