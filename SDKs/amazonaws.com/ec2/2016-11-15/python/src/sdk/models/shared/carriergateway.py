from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from . import *


@dataclass
class CarrierGateway:
    r"""CarrierGateway
    Describes a carrier gateway.
    """
    
    carrier_gateway_id: Optional[str] = field(default=None)
    owner_id: Optional[str] = field(default=None)
    state: Optional[CarrierGatewayStateEnum] = field(default=None)
    tags: Optional[List[Tag]] = field(default=None)
    vpc_id: Optional[str] = field(default=None)
    
