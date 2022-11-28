from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DescribeTransitGatewayAttachmentsResult:
    next_token: Optional[str] = field(default=None)
    transit_gateway_attachments: Optional[List[TransitGatewayAttachment]] = field(default=None)
    
