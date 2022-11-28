from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DescribeInstanceRefreshesAnswer:
    instance_refreshes: Optional[List[InstanceRefresh]] = field(default=None)
    next_token: Optional[str] = field(default=None)
    
