from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from . import *


@dataclass
class SubnetCidrReservation:
    r"""SubnetCidrReservation
    Describes a subnet CIDR reservation.
    """
    
    cidr: Optional[str] = field(default=None)
    description: Optional[str] = field(default=None)
    owner_id: Optional[str] = field(default=None)
    reservation_type: Optional[SubnetCidrReservationTypeEnum] = field(default=None)
    subnet_cidr_reservation_id: Optional[str] = field(default=None)
    subnet_id: Optional[str] = field(default=None)
    tags: Optional[List[Tag]] = field(default=None)
    
