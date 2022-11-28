from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from . import *


@dataclass
class LaunchTemplateCapacityReservationSpecificationResponse:
    r"""LaunchTemplateCapacityReservationSpecificationResponse
    Information about the Capacity Reservation targeting option.
    """
    
    capacity_reservation_preference: Optional[CapacityReservationPreferenceEnum] = field(default=None)
    capacity_reservation_target: Optional[CapacityReservationTargetResponse] = field(default=None)
    
