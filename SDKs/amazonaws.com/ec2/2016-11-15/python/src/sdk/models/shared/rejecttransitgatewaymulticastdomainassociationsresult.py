from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class RejectTransitGatewayMulticastDomainAssociationsResult:
    associations: Optional[TransitGatewayMulticastDomainAssociations] = field(default=None)
    
