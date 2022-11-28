from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class CreateTransitGatewayPrefixListReferenceResult:
    transit_gateway_prefix_list_reference: Optional[TransitGatewayPrefixListReference] = field(default=None)
    
