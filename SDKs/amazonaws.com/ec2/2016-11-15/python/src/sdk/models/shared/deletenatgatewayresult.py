from dataclasses import dataclass, field
from typing import Optional


@dataclass
class DeleteNatGatewayResult:
    nat_gateway_id: Optional[str] = field(default=None)
    
