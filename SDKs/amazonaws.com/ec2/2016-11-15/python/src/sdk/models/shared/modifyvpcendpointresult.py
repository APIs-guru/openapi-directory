from dataclasses import dataclass, field
from typing import Optional


@dataclass
class ModifyVpcEndpointResult:
    return_: Optional[bool] = field(default=None)
    
