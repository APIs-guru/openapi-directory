from dataclasses import dataclass, field
from typing import Optional


@dataclass
class CapacityReservationGroup:
    r"""CapacityReservationGroup
    Describes a resource group to which a Capacity Reservation has been added.
    """
    
    group_arn: Optional[str] = field(default=None)
    owner_id: Optional[str] = field(default=None)
    
