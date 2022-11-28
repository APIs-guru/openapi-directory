from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DescribeClientVpnEndpointsResult:
    client_vpn_endpoints: Optional[List[ClientVpnEndpoint]] = field(default=None)
    next_token: Optional[str] = field(default=None)
    
