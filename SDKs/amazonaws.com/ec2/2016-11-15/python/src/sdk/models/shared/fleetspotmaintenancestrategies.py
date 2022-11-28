from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class FleetSpotMaintenanceStrategies:
    r"""FleetSpotMaintenanceStrategies
    The strategies for managing your Spot Instances that are at an elevated risk of being interrupted.
    """
    
    capacity_rebalance: Optional[FleetSpotCapacityRebalance] = field(default=None)
    
