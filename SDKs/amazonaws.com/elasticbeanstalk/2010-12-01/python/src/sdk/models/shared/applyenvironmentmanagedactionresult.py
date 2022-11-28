from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from . import *


@dataclass
class ApplyEnvironmentManagedActionResult:
    r"""ApplyEnvironmentManagedActionResult
    The result message containing information about the managed action.
    """
    
    action_description: Optional[str] = field(default=None)
    action_id: Optional[str] = field(default=None)
    action_type: Optional[ActionTypeEnum] = field(default=None)
    status: Optional[str] = field(default=None)
    
