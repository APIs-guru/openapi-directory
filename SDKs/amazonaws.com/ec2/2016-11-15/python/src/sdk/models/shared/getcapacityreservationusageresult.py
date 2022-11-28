from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from . import *


@dataclass
class GetCapacityReservationUsageResult:
    available_instance_count: Optional[int] = field(default=None)
    capacity_reservation_id: Optional[str] = field(default=None)
    instance_type: Optional[str] = field(default=None)
    instance_usages: Optional[List[InstanceUsage]] = field(default=None)
    next_token: Optional[str] = field(default=None)
    state: Optional[CapacityReservationStateEnum] = field(default=None)
    total_instance_count: Optional[int] = field(default=None)
    
