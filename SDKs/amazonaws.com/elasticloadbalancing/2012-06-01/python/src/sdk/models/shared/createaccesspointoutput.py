from dataclasses import dataclass, field
from typing import Optional


@dataclass
class CreateAccessPointOutput:
    r"""CreateAccessPointOutput
    Contains the output for CreateLoadBalancer.
    """
    
    dns_name: Optional[str] = field(default=None)
    
