from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from . import *


@dataclass
class TransitGatewayRouteTablePropagation:
    r"""TransitGatewayRouteTablePropagation
    Describes a route table propagation.
    """
    
    resource_id: Optional[str] = field(default=None)
    resource_type: Optional[TransitGatewayAttachmentResourceTypeEnum] = field(default=None)
    state: Optional[TransitGatewayPropagationStateEnum] = field(default=None)
    transit_gateway_attachment_id: Optional[str] = field(default=None)
    
