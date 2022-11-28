from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DescribeVpnConnectionsResult:
    r"""DescribeVpnConnectionsResult
    Contains the output of DescribeVpnConnections.
    """
    
    vpn_connections: Optional[List[VpnConnection]] = field(default=None)
    
