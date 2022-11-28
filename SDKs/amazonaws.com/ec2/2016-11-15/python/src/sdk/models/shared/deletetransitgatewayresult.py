from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class DeleteTransitGatewayResult:
    transit_gateway: Optional[TransitGateway] = field(default=None)
    
