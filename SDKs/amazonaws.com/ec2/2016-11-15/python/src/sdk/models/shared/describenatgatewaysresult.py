from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DescribeNatGatewaysResult:
    nat_gateways: Optional[List[NatGateway]] = field(default=None)
    next_token: Optional[str] = field(default=None)
    
