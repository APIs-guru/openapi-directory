from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from . import *


@dataclass
class TransitGatewayAttachmentAssociation:
    r"""TransitGatewayAttachmentAssociation
    Describes an association.
    """
    
    state: Optional[TransitGatewayAssociationStateEnum] = field(default=None)
    transit_gateway_route_table_id: Optional[str] = field(default=None)
    
