from dataclasses import dataclass, field
from typing import Optional


@dataclass
class AutoScalingGroup:
    r"""AutoScalingGroup
    Describes an Auto Scaling launch configuration.
    """
    
    name: Optional[str] = field(default=None)
    
