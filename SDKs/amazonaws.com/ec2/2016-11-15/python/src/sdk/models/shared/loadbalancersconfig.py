from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class LoadBalancersConfig:
    r"""LoadBalancersConfig
    Describes the Classic Load Balancers and target groups to attach to a Spot Fleet request.
    """
    
    classic_load_balancers_config: Optional[ClassicLoadBalancersConfig] = field(default=None)
    target_groups_config: Optional[TargetGroupsConfig] = field(default=None)
    
