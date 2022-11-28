from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class TargetReservationValue:
    r"""TargetReservationValue
    The total value of the new Convertible Reserved Instances.
    """
    
    reservation_value: Optional[ReservationValue] = field(default=None)
    target_configuration: Optional[TargetConfiguration] = field(default=None)
    
