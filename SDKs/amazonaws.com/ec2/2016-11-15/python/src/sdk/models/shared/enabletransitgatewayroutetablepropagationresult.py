from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class EnableTransitGatewayRouteTablePropagationResult:
    propagation: Optional[TransitGatewayPropagation] = field(default=None)
    
