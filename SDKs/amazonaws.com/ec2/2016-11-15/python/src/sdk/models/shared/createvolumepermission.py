from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from . import *


@dataclass
class CreateVolumePermission:
    r"""CreateVolumePermission
    Describes the user or group to be added or removed from the list of create volume permissions for a volume.
    """
    
    group: Optional[PermissionGroupEnum] = field(default=None)
    user_id: Optional[str] = field(default=None)
    
