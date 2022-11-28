from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from . import *


@dataclass
class NetworkInterfacePermissionState:
    r"""NetworkInterfacePermissionState
    Describes the state of a network interface permission.
    """
    
    state: Optional[NetworkInterfacePermissionStateCodeEnum] = field(default=None)
    status_message: Optional[str] = field(default=None)
    
