from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DescribeListenersOutput:
    listeners: Optional[List[Listener]] = field(default=None)
    next_marker: Optional[str] = field(default=None)
    
