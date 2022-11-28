from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from . import *


@dataclass
class SpotCapacityRebalance:
    r"""SpotCapacityRebalance
    The Spot Instance replacement strategy to use when Amazon EC2 emits a signal that your Spot Instance is at an elevated risk of being interrupted. For more information, see <a href=\"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-fleet-configuration-strategies.html#spot-fleet-capacity-rebalance\">Capacity rebalancing</a> in the <i>Amazon EC2 User Guide for Linux Instances</i>.
    """
    
    replacement_strategy: Optional[ReplacementStrategyEnum] = field(default=None)
    
