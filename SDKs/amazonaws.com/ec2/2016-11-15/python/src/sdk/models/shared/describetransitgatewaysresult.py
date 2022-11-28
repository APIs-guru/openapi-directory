from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DescribeTransitGatewaysResult:
    next_token: Optional[str] = field(default=None)
    transit_gateways: Optional[List[TransitGateway]] = field(default=None)
    
