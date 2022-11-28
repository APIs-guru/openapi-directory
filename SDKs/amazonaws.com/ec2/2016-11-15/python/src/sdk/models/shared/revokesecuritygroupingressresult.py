from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class RevokeSecurityGroupIngressResult:
    return_: Optional[bool] = field(default=None)
    unknown_ip_permissions: Optional[List[IPPermission]] = field(default=None)
    
