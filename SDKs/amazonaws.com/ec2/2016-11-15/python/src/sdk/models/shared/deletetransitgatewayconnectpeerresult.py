from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class DeleteTransitGatewayConnectPeerResult:
    transit_gateway_connect_peer: Optional[TransitGatewayConnectPeer] = field(default=None)
    
