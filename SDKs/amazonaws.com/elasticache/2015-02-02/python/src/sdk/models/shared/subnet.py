from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class Subnet:
    r"""Subnet
    Represents the subnet associated with a cluster. This parameter refers to subnets defined in Amazon Virtual Private Cloud (Amazon VPC) and used with ElastiCache.
    """
    
    subnet_availability_zone: Optional[AvailabilityZone] = field(default=None)
    subnet_identifier: Optional[str] = field(default=None)
    subnet_outpost: Optional[SubnetOutpost] = field(default=None)
    
