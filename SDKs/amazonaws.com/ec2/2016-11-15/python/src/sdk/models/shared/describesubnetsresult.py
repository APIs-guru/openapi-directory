from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DescribeSubnetsResult:
    next_token: Optional[str] = field(default=None)
    subnets: Optional[List[Subnet]] = field(default=None)
    
