from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DescribeVpnGatewaysResult:
    r"""DescribeVpnGatewaysResult
    Contains the output of DescribeVpnGateways.
    """
    
    vpn_gateways: Optional[List[VpnGateway]] = field(default=None)
    
