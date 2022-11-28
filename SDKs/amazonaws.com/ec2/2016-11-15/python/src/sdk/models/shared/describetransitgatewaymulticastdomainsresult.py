from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DescribeTransitGatewayMulticastDomainsResult:
    next_token: Optional[str] = field(default=None)
    transit_gateway_multicast_domains: Optional[List[TransitGatewayMulticastDomain]] = field(default=None)
    
