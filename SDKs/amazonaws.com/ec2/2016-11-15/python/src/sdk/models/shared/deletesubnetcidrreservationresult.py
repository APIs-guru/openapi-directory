from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class DeleteSubnetCidrReservationResult:
    deleted_subnet_cidr_reservation: Optional[SubnetCidrReservation] = field(default=None)
    
