from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class CreateNetworkACLResult:
    network_acl: Optional[NetworkACL] = field(default=None)
    
