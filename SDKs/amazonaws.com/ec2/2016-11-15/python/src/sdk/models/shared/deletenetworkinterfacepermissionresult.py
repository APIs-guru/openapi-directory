from dataclasses import dataclass, field
from typing import Optional


@dataclass
class DeleteNetworkInterfacePermissionResult:
    r"""DeleteNetworkInterfacePermissionResult
    Contains the output for DeleteNetworkInterfacePermission.
    """
    
    return_: Optional[bool] = field(default=None)
    
