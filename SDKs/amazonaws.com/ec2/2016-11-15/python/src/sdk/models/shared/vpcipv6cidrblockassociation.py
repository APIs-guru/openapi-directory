from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class VpcIpv6CidrBlockAssociation:
    r"""VpcIpv6CidrBlockAssociation
    Describes an IPv6 CIDR block associated with a VPC.
    """
    
    association_id: Optional[str] = field(default=None)
    ipv6_cidr_block: Optional[str] = field(default=None)
    ipv6_cidr_block_state: Optional[VpcCidrBlockState] = field(default=None)
    ipv6_pool: Optional[str] = field(default=None)
    network_border_group: Optional[str] = field(default=None)
    
