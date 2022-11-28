from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from . import *


@dataclass
class TransitGatewayPrefixListReference:
    r"""TransitGatewayPrefixListReference
    Describes a prefix list reference.
    """
    
    blackhole: Optional[bool] = field(default=None)
    prefix_list_id: Optional[str] = field(default=None)
    prefix_list_owner_id: Optional[str] = field(default=None)
    state: Optional[TransitGatewayPrefixListReferenceStateEnum] = field(default=None)
    transit_gateway_attachment: Optional[TransitGatewayPrefixListAttachment] = field(default=None)
    transit_gateway_route_table_id: Optional[str] = field(default=None)
    
