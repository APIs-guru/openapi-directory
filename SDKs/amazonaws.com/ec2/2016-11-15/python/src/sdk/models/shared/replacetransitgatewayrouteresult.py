from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class ReplaceTransitGatewayRouteResult:
    route: Optional[TransitGatewayRoute] = field(default=None)
    
