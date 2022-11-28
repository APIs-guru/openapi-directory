from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from . import *


@dataclass
class SpotOptions:
    r"""SpotOptions
    Describes the configuration of Spot Instances in an EC2 Fleet.
    """
    
    allocation_strategy: Optional[SpotAllocationStrategyEnum] = field(default=None)
    instance_interruption_behavior: Optional[SpotInstanceInterruptionBehaviorEnum] = field(default=None)
    instance_pools_to_use_count: Optional[int] = field(default=None)
    maintenance_strategies: Optional[FleetSpotMaintenanceStrategies] = field(default=None)
    max_total_price: Optional[str] = field(default=None)
    min_target_capacity: Optional[int] = field(default=None)
    single_availability_zone: Optional[bool] = field(default=None)
    single_instance_type: Optional[bool] = field(default=None)
    
