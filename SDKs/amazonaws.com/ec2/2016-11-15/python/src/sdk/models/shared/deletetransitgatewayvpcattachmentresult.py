from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class DeleteTransitGatewayVpcAttachmentResult:
    transit_gateway_vpc_attachment: Optional[TransitGatewayVpcAttachment] = field(default=None)
    
