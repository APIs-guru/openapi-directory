from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class ReservedInstanceReservationValue:
    r"""ReservedInstanceReservationValue
    The total value of the Convertible Reserved Instance.
    """
    
    reservation_value: Optional[ReservationValue] = field(default=None)
    reserved_instance_id: Optional[str] = field(default=None)
    
