from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class CreateSubnetCidrReservationResult:
    subnet_cidr_reservation: Optional[SubnetCidrReservation] = field(default=None)
    
