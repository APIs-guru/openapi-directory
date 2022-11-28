from dataclasses import dataclass, field
from typing import Optional


@dataclass
class CapacityReservationTargetResponse:
    r"""CapacityReservationTargetResponse
    Describes a target Capacity Reservation or Capacity Reservation group.
    """
    
    capacity_reservation_id: Optional[str] = field(default=None)
    capacity_reservation_resource_group_arn: Optional[str] = field(default=None)
    
