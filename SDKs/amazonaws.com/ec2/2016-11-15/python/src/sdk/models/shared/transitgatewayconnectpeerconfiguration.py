from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from . import *


@dataclass
class TransitGatewayConnectPeerConfiguration:
    r"""TransitGatewayConnectPeerConfiguration
    Describes the Connect peer details.
    """
    
    bgp_configurations: Optional[List[TransitGatewayAttachmentBgpConfiguration]] = field(default=None)
    inside_cidr_blocks: Optional[List[str]] = field(default=None)
    peer_address: Optional[str] = field(default=None)
    protocol: Optional[ProtocolValueEnum] = field(default=None)
    transit_gateway_address: Optional[str] = field(default=None)
    
