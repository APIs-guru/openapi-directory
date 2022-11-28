from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from . import *


@dataclass
class TransitGatewayAttachmentPropagation:
    r"""TransitGatewayAttachmentPropagation
    Describes a propagation route table.
    """
    
    state: Optional[TransitGatewayPropagationStateEnum] = field(default=None)
    transit_gateway_route_table_id: Optional[str] = field(default=None)
    
