from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DescribePublicIpv4PoolsResult:
    next_token: Optional[str] = field(default=None)
    public_ipv4_pools: Optional[List[PublicIpv4Pool]] = field(default=None)
    
