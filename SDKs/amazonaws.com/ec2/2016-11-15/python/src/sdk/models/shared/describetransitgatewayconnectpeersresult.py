from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DescribeTransitGatewayConnectPeersResult:
    next_token: Optional[str] = field(default=None)
    transit_gateway_connect_peers: Optional[List[TransitGatewayConnectPeer]] = field(default=None)
    
