from dataclasses import dataclass, field
from typing import Optional


@dataclass
class PropagatingVgw:
    r"""PropagatingVgw
    Describes a virtual private gateway propagating route.
    """
    
    gateway_id: Optional[str] = field(default=None)
    
