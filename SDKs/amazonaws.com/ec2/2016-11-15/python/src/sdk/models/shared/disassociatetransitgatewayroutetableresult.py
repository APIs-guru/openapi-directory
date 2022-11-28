from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class DisassociateTransitGatewayRouteTableResult:
    association: Optional[TransitGatewayAssociation] = field(default=None)
    
