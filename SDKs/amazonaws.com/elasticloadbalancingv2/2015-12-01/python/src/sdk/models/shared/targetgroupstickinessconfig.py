from dataclasses import dataclass, field
from typing import Optional


@dataclass
class TargetGroupStickinessConfig:
    r"""TargetGroupStickinessConfig
    Information about the target group stickiness for a rule.
    """
    
    duration_seconds: Optional[int] = field(default=None)
    enabled: Optional[bool] = field(default=None)
    
