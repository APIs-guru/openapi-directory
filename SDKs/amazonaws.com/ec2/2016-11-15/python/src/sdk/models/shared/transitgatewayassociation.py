from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from . import *


@dataclass
class TransitGatewayAssociation:
    r"""TransitGatewayAssociation
    Describes an association between a resource attachment and a transit gateway route table.
    """
    
    resource_id: Optional[str] = field(default=None)
    resource_type: Optional[TransitGatewayAttachmentResourceTypeEnum] = field(default=None)
    state: Optional[TransitGatewayAssociationStateEnum] = field(default=None)
    transit_gateway_attachment_id: Optional[str] = field(default=None)
    transit_gateway_route_table_id: Optional[str] = field(default=None)
    
