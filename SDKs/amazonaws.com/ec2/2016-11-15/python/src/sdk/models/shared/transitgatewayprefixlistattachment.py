from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from . import *


@dataclass
class TransitGatewayPrefixListAttachment:
    r"""TransitGatewayPrefixListAttachment
    Describes a transit gateway prefix list attachment.
    """
    
    resource_id: Optional[str] = field(default=None)
    resource_type: Optional[TransitGatewayAttachmentResourceTypeEnum] = field(default=None)
    transit_gateway_attachment_id: Optional[str] = field(default=None)
    
