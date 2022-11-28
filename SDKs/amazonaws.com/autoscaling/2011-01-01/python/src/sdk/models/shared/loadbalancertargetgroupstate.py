from dataclasses import dataclass, field
from typing import Optional


@dataclass
class LoadBalancerTargetGroupState:
    r"""LoadBalancerTargetGroupState
    Describes the state of a target group.
    """
    
    load_balancer_target_group_arn: Optional[str] = field(default=None)
    state: Optional[str] = field(default=None)
    
