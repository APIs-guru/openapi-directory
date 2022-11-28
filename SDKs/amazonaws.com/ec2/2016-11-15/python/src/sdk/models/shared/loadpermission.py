from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from . import *


@dataclass
class LoadPermission:
    r"""LoadPermission
    Describes a load permission.
    """
    
    group: Optional[PermissionGroupEnum] = field(default=None)
    user_id: Optional[str] = field(default=None)
    
