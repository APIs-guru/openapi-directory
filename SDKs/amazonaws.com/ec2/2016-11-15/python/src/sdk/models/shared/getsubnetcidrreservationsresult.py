from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class GetSubnetCidrReservationsResult:
    next_token: Optional[str] = field(default=None)
    subnet_ipv4_cidr_reservations: Optional[List[SubnetCidrReservation]] = field(default=None)
    subnet_ipv6_cidr_reservations: Optional[List[SubnetCidrReservation]] = field(default=None)
    
