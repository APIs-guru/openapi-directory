from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class ModifyInstanceEventStartTimeResult:
    event: Optional[InstanceStatusEvent] = field(default=None)
    
