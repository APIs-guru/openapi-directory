from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class DisableTransitGatewayRouteTablePropagationResult:
    propagation: Optional[TransitGatewayPropagation] = field(default=None)
    
