from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from . import *


@dataclass
class TransitGatewayRouteAttachment:
    r"""TransitGatewayRouteAttachment
    Describes a route attachment.
    """
    
    resource_id: Optional[str] = field(default=None)
    resource_type: Optional[TransitGatewayAttachmentResourceTypeEnum] = field(default=None)
    transit_gateway_attachment_id: Optional[str] = field(default=None)
    
