from dataclasses import dataclass, field
from typing import Optional


@dataclass
class SubnetOutpost:
    r"""SubnetOutpost
    The ID of the outpost subnet.
    """
    
    subnet_outpost_arn: Optional[str] = field(default=None)
    
