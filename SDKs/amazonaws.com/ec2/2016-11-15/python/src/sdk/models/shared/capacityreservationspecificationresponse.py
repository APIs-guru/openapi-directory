from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from . import *


@dataclass
class CapacityReservationSpecificationResponse:
    r"""CapacityReservationSpecificationResponse
    Describes the instance's Capacity Reservation targeting preferences. The action returns the <code>capacityReservationPreference</code> response element if the instance is configured to run in On-Demand capacity, or if it is configured in run in any <code>open</code> Capacity Reservation that has matching attributes (instance type, platform, Availability Zone). The action returns the <code>capacityReservationTarget</code> response element if the instance explicily targets a specific Capacity Reservation or Capacity Reservation group.
    """
    
    capacity_reservation_preference: Optional[CapacityReservationPreferenceEnum] = field(default=None)
    capacity_reservation_target: Optional[CapacityReservationTargetResponse] = field(default=None)
    
