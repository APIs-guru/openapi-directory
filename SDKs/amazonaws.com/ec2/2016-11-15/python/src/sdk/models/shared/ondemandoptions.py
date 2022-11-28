from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from . import *


@dataclass
class OnDemandOptions:
    r"""OnDemandOptions
    Describes the configuration of On-Demand Instances in an EC2 Fleet.
    """
    
    allocation_strategy: Optional[FleetOnDemandAllocationStrategyEnum] = field(default=None)
    capacity_reservation_options: Optional[CapacityReservationOptions] = field(default=None)
    max_total_price: Optional[str] = field(default=None)
    min_target_capacity: Optional[int] = field(default=None)
    single_availability_zone: Optional[bool] = field(default=None)
    single_instance_type: Optional[bool] = field(default=None)
    
