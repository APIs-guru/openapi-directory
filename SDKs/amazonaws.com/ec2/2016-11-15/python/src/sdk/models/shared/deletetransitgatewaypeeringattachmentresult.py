from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class DeleteTransitGatewayPeeringAttachmentResult:
    transit_gateway_peering_attachment: Optional[TransitGatewayPeeringAttachment] = field(default=None)
    
