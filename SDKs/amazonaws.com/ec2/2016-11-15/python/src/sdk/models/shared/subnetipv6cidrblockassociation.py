from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class SubnetIpv6CidrBlockAssociation:
    r"""SubnetIpv6CidrBlockAssociation
    Describes an IPv6 CIDR block associated with a subnet.
    """
    
    association_id: Optional[str] = field(default=None)
    ipv6_cidr_block: Optional[str] = field(default=None)
    ipv6_cidr_block_state: Optional[SubnetCidrBlockState] = field(default=None)
    
