from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class DeleteTransitGatewayConnectResult:
    transit_gateway_connect: Optional[TransitGatewayConnect] = field(default=None)
    
