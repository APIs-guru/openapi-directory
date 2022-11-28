from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class CreateNetworkInterfacePermissionResult:
    r"""CreateNetworkInterfacePermissionResult
    Contains the output of CreateNetworkInterfacePermission.
    """
    
    interface_permission: Optional[NetworkInterfacePermission] = field(default=None)
    
