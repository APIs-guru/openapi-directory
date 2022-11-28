from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class DeleteTransitGatewayMulticastDomainResult:
    transit_gateway_multicast_domain: Optional[TransitGatewayMulticastDomain] = field(default=None)
    
