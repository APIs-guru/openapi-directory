from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class DisassociateInstanceEventWindowResult:
    instance_event_window: Optional[InstanceEventWindow] = field(default=None)
    
