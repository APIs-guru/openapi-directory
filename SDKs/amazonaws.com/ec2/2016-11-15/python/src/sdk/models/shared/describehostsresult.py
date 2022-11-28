from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DescribeHostsResult:
    hosts: Optional[List[Host]] = field(default=None)
    next_token: Optional[str] = field(default=None)
    
