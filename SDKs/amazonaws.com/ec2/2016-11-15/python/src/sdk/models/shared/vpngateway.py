from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from . import *


@dataclass
class VpnGateway:
    r"""VpnGateway
    Describes a virtual private gateway.
    """
    
    amazon_side_asn: Optional[int] = field(default=None)
    availability_zone: Optional[str] = field(default=None)
    state: Optional[VpnStateEnum] = field(default=None)
    tags: Optional[List[Tag]] = field(default=None)
    type: Optional[GatewayTypeEnum] = field(default=None)
    vpc_attachments: Optional[List[VpcAttachment]] = field(default=None)
    vpn_gateway_id: Optional[str] = field(default=None)
    
