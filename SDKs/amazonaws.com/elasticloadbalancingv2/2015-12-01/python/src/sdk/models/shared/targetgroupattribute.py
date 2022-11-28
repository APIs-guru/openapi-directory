from dataclasses import dataclass, field
from typing import Optional


@dataclass
class TargetGroupAttribute:
    r"""TargetGroupAttribute
    Information about a target group attribute.
    """
    
    key: Optional[str] = field(default=None)
    value: Optional[str] = field(default=None)
    
