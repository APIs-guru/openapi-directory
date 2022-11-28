from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DescribeEgressOnlyInternetGatewaysResult:
    egress_only_internet_gateways: Optional[List[EgressOnlyInternetGateway]] = field(default=None)
    next_token: Optional[str] = field(default=None)
    
