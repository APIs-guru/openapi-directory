from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DescribeTransitGatewayConnectsResult:
    next_token: Optional[str] = field(default=None)
    transit_gateway_connects: Optional[List[TransitGatewayConnect]] = field(default=None)
    
