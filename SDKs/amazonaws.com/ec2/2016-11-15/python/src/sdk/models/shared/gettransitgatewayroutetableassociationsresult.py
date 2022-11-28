from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class GetTransitGatewayRouteTableAssociationsResult:
    associations: Optional[List[TransitGatewayRouteTableAssociation]] = field(default=None)
    next_token: Optional[str] = field(default=None)
    
