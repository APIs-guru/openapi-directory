from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DescribeCoipPoolsResult:
    coip_pools: Optional[List[CoipPool]] = field(default=None)
    next_token: Optional[str] = field(default=None)
    
