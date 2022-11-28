from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DescribeInstanceEventWindowsResult:
    instance_event_windows: Optional[List[InstanceEventWindow]] = field(default=None)
    next_token: Optional[str] = field(default=None)
    
