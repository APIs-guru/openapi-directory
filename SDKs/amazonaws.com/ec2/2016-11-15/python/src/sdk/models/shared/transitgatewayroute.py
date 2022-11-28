from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from . import *


@dataclass
class TransitGatewayRoute:
    r"""TransitGatewayRoute
    Describes a route for a transit gateway route table.
    """
    
    destination_cidr_block: Optional[str] = field(default=None)
    prefix_list_id: Optional[str] = field(default=None)
    state: Optional[TransitGatewayRouteStateEnum] = field(default=None)
    transit_gateway_attachments: Optional[List[TransitGatewayRouteAttachment]] = field(default=None)
    type: Optional[TransitGatewayRouteTypeEnum] = field(default=None)
    
