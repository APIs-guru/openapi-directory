from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DescribeIpv6PoolsResult:
    ipv6_pools: Optional[List[Ipv6Pool]] = field(default=None)
    next_token: Optional[str] = field(default=None)
    
