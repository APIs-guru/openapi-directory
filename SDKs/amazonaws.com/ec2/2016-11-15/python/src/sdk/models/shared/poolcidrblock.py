from dataclasses import dataclass, field
from typing import Optional


@dataclass
class PoolCidrBlock:
    r"""PoolCidrBlock
    Describes a CIDR block for an address pool.
    """
    
    cidr: Optional[str] = field(default=None)
    
