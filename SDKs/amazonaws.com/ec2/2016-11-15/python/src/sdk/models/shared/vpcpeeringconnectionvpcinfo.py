from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class VpcPeeringConnectionVpcInfo:
    r"""VpcPeeringConnectionVpcInfo
    Describes a VPC in a VPC peering connection.
    """
    
    cidr_block: Optional[str] = field(default=None)
    cidr_block_set: Optional[List[CidrBlock]] = field(default=None)
    ipv6_cidr_block_set: Optional[List[Ipv6CidrBlock]] = field(default=None)
    owner_id: Optional[str] = field(default=None)
    peering_options: Optional[VpcPeeringConnectionOptionsDescription] = field(default=None)
    region: Optional[str] = field(default=None)
    vpc_id: Optional[str] = field(default=None)
    
