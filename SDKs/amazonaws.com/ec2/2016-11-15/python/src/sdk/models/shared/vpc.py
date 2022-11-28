from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from . import *


@dataclass
class Vpc:
    r"""Vpc
    Describes a VPC.
    """
    
    cidr_block: Optional[str] = field(default=None)
    cidr_block_association_set: Optional[List[VpcCidrBlockAssociation]] = field(default=None)
    dhcp_options_id: Optional[str] = field(default=None)
    instance_tenancy: Optional[TenancyEnum] = field(default=None)
    ipv6_cidr_block_association_set: Optional[List[VpcIpv6CidrBlockAssociation]] = field(default=None)
    is_default: Optional[bool] = field(default=None)
    owner_id: Optional[str] = field(default=None)
    state: Optional[VpcStateEnum] = field(default=None)
    tags: Optional[List[Tag]] = field(default=None)
    vpc_id: Optional[str] = field(default=None)
    
