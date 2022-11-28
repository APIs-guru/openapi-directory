from dataclasses import dataclass, field
from typing import Optional


@dataclass
class Ipv6CidrAssociation:
    r"""Ipv6CidrAssociation
    Describes an IPv6 CIDR block association.
    """
    
    associated_resource: Optional[str] = field(default=None)
    ipv6_cidr: Optional[str] = field(default=None)
    
