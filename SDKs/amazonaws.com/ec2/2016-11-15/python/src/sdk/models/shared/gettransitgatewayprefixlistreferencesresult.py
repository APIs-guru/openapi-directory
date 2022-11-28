from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class GetTransitGatewayPrefixListReferencesResult:
    next_token: Optional[str] = field(default=None)
    transit_gateway_prefix_list_references: Optional[List[TransitGatewayPrefixListReference]] = field(default=None)
    
