from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class TargetHealthDescription:
    r"""TargetHealthDescription
    Information about the health of a target.
    """
    
    health_check_port: Optional[str] = field(default=None)
    target: Optional[TargetDescription] = field(default=None)
    target_health: Optional[TargetHealth] = field(default=None)
    
