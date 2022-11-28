from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class CreateNatGatewayResult:
    client_token: Optional[str] = field(default=None)
    nat_gateway: Optional[NatGateway] = field(default=None)
    
