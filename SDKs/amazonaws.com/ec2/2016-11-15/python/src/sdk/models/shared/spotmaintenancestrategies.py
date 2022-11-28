from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class SpotMaintenanceStrategies:
    r"""SpotMaintenanceStrategies
    The strategies for managing your Spot Instances that are at an elevated risk of being interrupted.
    """
    
    capacity_rebalance: Optional[SpotCapacityRebalance] = field(default=None)
    
