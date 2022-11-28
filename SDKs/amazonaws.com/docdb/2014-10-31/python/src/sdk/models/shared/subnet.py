from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class Subnet:
    r"""Subnet
     Detailed information about a subnet. 
    """
    
    subnet_availability_zone: Optional[AvailabilityZone] = field(default=None)
    subnet_identifier: Optional[str] = field(default=None)
    subnet_status: Optional[str] = field(default=None)
    
