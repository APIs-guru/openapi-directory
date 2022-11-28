from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DescribeNetworkInterfacePermissionsResult:
    r"""DescribeNetworkInterfacePermissionsResult
    Contains the output for DescribeNetworkInterfacePermissions.
    """
    
    network_interface_permissions: Optional[List[NetworkInterfacePermission]] = field(default=None)
    next_token: Optional[str] = field(default=None)
    
