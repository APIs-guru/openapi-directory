from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from . import *


@dataclass
class TransitGatewayAttachmentBgpConfiguration:
    r"""TransitGatewayAttachmentBgpConfiguration
    The BGP configuration information.
    """
    
    bgp_status: Optional[BgpStatusEnum] = field(default=None)
    peer_address: Optional[str] = field(default=None)
    peer_asn: Optional[int] = field(default=None)
    transit_gateway_address: Optional[str] = field(default=None)
    transit_gateway_asn: Optional[int] = field(default=None)
    
