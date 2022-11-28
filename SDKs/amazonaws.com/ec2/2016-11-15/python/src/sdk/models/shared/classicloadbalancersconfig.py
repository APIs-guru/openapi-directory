from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class ClassicLoadBalancersConfig:
    r"""ClassicLoadBalancersConfig
    Describes the Classic Load Balancers to attach to a Spot Fleet. Spot Fleet registers the running Spot Instances with these Classic Load Balancers.
    """
    
    classic_load_balancers: Optional[List[ClassicLoadBalancer]] = field(default=None)
    
