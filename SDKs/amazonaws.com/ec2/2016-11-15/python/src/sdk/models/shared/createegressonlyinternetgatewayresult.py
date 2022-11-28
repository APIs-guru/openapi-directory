from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class CreateEgressOnlyInternetGatewayResult:
    client_token: Optional[str] = field(default=None)
    egress_only_internet_gateway: Optional[EgressOnlyInternetGateway] = field(default=None)
    
