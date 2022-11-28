from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DescribeTransitGatewayPeeringAttachmentsResult:
    next_token: Optional[str] = field(default=None)
    transit_gateway_peering_attachments: Optional[List[TransitGatewayPeeringAttachment]] = field(default=None)
    
