from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class CreateTransitGatewayRouteResult:
    route: Optional[TransitGatewayRoute] = field(default=None)
    
