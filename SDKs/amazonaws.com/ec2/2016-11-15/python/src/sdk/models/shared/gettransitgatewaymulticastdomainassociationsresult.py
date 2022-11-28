from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class GetTransitGatewayMulticastDomainAssociationsResult:
    multicast_domain_associations: Optional[List[TransitGatewayMulticastDomainAssociation]] = field(default=None)
    next_token: Optional[str] = field(default=None)
    
