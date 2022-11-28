from dataclasses import dataclass, field
from typing import Optional


@dataclass
class TargetGroupTuple:
    r"""TargetGroupTuple
    Information about how traffic will be distributed between multiple target groups in a forward rule.
    """
    
    target_group_arn: Optional[str] = field(default=None)
    weight: Optional[int] = field(default=None)
    
