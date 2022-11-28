from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class SecurityGroup:
    r"""SecurityGroup
    Describes a security group.
    """
    
    description: Optional[str] = field(default=None)
    group_id: Optional[str] = field(default=None)
    group_name: Optional[str] = field(default=None)
    ip_permissions: Optional[List[IPPermission]] = field(default=None)
    ip_permissions_egress: Optional[List[IPPermission]] = field(default=None)
    owner_id: Optional[str] = field(default=None)
    tags: Optional[List[Tag]] = field(default=None)
    vpc_id: Optional[str] = field(default=None)
    
