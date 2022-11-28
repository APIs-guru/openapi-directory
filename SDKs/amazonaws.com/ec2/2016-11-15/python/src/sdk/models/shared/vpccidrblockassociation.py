from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class VpcCidrBlockAssociation:
    r"""VpcCidrBlockAssociation
    Describes an IPv4 CIDR block associated with a VPC.
    """
    
    association_id: Optional[str] = field(default=None)
    cidr_block: Optional[str] = field(default=None)
    cidr_block_state: Optional[VpcCidrBlockState] = field(default=None)
    
