from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class CreateTransitGatewayConnectResult:
    transit_gateway_connect: Optional[TransitGatewayConnect] = field(default=None)
    
