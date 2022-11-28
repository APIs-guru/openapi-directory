from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from . import *


@dataclass
class FleetSpotCapacityRebalance:
    r"""FleetSpotCapacityRebalance
    The strategy to use when Amazon EC2 emits a signal that your Spot Instance is at an elevated risk of being interrupted.
    """
    
    replacement_strategy: Optional[FleetReplacementStrategyEnum] = field(default=None)
    
