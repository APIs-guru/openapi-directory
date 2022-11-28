from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class GetTransitGatewayAttachmentPropagationsResult:
    next_token: Optional[str] = field(default=None)
    transit_gateway_attachment_propagations: Optional[List[TransitGatewayAttachmentPropagation]] = field(default=None)
    
