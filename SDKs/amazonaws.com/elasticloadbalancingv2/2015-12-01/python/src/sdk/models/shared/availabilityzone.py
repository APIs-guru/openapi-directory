from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class AvailabilityZone:
    r"""AvailabilityZone
    Information about an Availability Zone.
    """
    
    load_balancer_addresses: Optional[List[LoadBalancerAddress]] = field(default=None)
    outpost_id: Optional[str] = field(default=None)
    subnet_id: Optional[str] = field(default=None)
    zone_name: Optional[str] = field(default=None)
    
