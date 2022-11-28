from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class DisassociateVpcCidrBlockResult:
    cidr_block_association: Optional[VpcCidrBlockAssociation] = field(default=None)
    ipv6_cidr_block_association: Optional[VpcIpv6CidrBlockAssociation] = field(default=None)
    vpc_id: Optional[str] = field(default=None)
    
