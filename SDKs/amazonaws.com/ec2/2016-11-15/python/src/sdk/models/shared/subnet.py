from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from . import *


@dataclass
class Subnet:
    r"""Subnet
    Describes a subnet.
    """
    
    assign_ipv6_address_on_creation: Optional[bool] = field(default=None)
    availability_zone: Optional[str] = field(default=None)
    availability_zone_id: Optional[str] = field(default=None)
    available_ip_address_count: Optional[int] = field(default=None)
    cidr_block: Optional[str] = field(default=None)
    customer_owned_ipv4_pool: Optional[str] = field(default=None)
    default_for_az: Optional[bool] = field(default=None)
    ipv6_cidr_block_association_set: Optional[List[SubnetIpv6CidrBlockAssociation]] = field(default=None)
    map_customer_owned_ip_on_launch: Optional[bool] = field(default=None)
    map_public_ip_on_launch: Optional[bool] = field(default=None)
    outpost_arn: Optional[str] = field(default=None)
    owner_id: Optional[str] = field(default=None)
    state: Optional[SubnetStateEnum] = field(default=None)
    subnet_arn: Optional[str] = field(default=None)
    subnet_id: Optional[str] = field(default=None)
    tags: Optional[List[Tag]] = field(default=None)
    vpc_id: Optional[str] = field(default=None)
    
