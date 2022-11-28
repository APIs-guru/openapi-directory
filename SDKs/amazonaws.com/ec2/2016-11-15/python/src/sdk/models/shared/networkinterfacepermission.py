from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from . import *


@dataclass
class NetworkInterfacePermission:
    r"""NetworkInterfacePermission
    Describes a permission for a network interface.
    """
    
    aws_account_id: Optional[str] = field(default=None)
    aws_service: Optional[str] = field(default=None)
    network_interface_id: Optional[str] = field(default=None)
    network_interface_permission_id: Optional[str] = field(default=None)
    permission: Optional[InterfacePermissionTypeEnum] = field(default=None)
    permission_state: Optional[NetworkInterfacePermissionState] = field(default=None)
    
