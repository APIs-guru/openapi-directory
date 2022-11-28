from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class CreateCapacityReservationResult:
    capacity_reservation: Optional[CapacityReservation] = field(default=None)
    
