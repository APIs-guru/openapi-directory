from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class DeleteCarrierGatewayResult:
    carrier_gateway: Optional[CarrierGateway] = field(default=None)
    
