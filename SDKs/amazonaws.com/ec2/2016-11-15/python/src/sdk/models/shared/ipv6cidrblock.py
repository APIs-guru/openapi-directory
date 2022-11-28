from dataclasses import dataclass, field
from typing import Optional


@dataclass
class Ipv6CidrBlock:
    r"""Ipv6CidrBlock
    Describes an IPv6 CIDR block.
    """
    
    ipv6_cidr_block: Optional[str] = field(default=None)
    
