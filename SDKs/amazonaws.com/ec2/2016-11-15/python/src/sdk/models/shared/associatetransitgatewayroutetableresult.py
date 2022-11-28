from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class AssociateTransitGatewayRouteTableResult:
    association: Optional[TransitGatewayAssociation] = field(default=None)
    
