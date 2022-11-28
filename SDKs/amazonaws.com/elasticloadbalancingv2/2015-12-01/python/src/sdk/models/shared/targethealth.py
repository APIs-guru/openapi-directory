from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from . import *


@dataclass
class TargetHealth:
    r"""TargetHealth
    Information about the current health of a target.
    """
    
    description: Optional[str] = field(default=None)
    reason: Optional[TargetHealthReasonEnumEnum] = field(default=None)
    state: Optional[TargetHealthStateEnumEnum] = field(default=None)
    
