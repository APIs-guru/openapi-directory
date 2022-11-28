from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from . import *


@dataclass
class TransitGatewayRouteTableAssociation:
    r"""TransitGatewayRouteTableAssociation
    Describes an association between a route table and a resource attachment.
    """
    
    resource_id: Optional[str] = field(default=None)
    resource_type: Optional[TransitGatewayAttachmentResourceTypeEnum] = field(default=None)
    state: Optional[TransitGatewayAssociationStateEnum] = field(default=None)
    transit_gateway_attachment_id: Optional[str] = field(default=None)
    
