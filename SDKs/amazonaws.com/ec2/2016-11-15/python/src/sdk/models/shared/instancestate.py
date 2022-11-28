from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from . import *


@dataclass
class InstanceState:
    r"""InstanceState
    Describes the current state of an instance.
    """
    
    code: Optional[int] = field(default=None)
    name: Optional[InstanceStateNameEnum] = field(default=None)
    
