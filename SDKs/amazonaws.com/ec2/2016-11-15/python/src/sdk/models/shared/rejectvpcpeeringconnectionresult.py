from dataclasses import dataclass, field
from typing import Optional


@dataclass
class RejectVpcPeeringConnectionResult:
    return_: Optional[bool] = field(default=None)
    
