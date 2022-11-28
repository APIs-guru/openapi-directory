from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class StaleSecurityGroup:
    r"""StaleSecurityGroup
    Describes a stale security group (a security group that contains stale rules).
    """
    
    description: Optional[str] = field(default=None)
    group_id: Optional[str] = field(default=None)
    group_name: Optional[str] = field(default=None)
    stale_ip_permissions: Optional[List[StaleIPPermission]] = field(default=None)
    stale_ip_permissions_egress: Optional[List[StaleIPPermission]] = field(default=None)
    vpc_id: Optional[str] = field(default=None)
    
