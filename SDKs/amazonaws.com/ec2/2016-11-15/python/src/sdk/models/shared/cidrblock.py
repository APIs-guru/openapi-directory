from dataclasses import dataclass, field
from typing import Optional


@dataclass
class CidrBlock:
    r"""CidrBlock
    Describes an IPv4 CIDR block.
    """
    
    cidr_block: Optional[str] = field(default=None)
    
