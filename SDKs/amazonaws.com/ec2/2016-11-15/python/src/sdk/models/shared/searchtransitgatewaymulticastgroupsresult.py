from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class SearchTransitGatewayMulticastGroupsResult:
    multicast_groups: Optional[List[TransitGatewayMulticastGroup]] = field(default=None)
    next_token: Optional[str] = field(default=None)
    
