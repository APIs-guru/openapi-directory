from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class DeleteTransitGatewayRouteResult:
    route: Optional[TransitGatewayRoute] = field(default=None)
    
