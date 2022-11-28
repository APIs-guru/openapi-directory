from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DescribeTransitGatewayVpcAttachmentsResult:
    next_token: Optional[str] = field(default=None)
    transit_gateway_vpc_attachments: Optional[List[TransitGatewayVpcAttachment]] = field(default=None)
    
