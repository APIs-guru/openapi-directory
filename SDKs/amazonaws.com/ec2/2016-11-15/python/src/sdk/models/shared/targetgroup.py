from dataclasses import dataclass, field
from typing import Optional


@dataclass
class TargetGroup:
    r"""TargetGroup
    Describes a load balancer target group.
    """
    
    arn: Optional[str] = field(default=None)
    
