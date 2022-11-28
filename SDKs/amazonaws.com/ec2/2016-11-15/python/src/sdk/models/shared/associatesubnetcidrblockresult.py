from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class AssociateSubnetCidrBlockResult:
    ipv6_cidr_block_association: Optional[SubnetIpv6CidrBlockAssociation] = field(default=None)
    subnet_id: Optional[str] = field(default=None)
    
