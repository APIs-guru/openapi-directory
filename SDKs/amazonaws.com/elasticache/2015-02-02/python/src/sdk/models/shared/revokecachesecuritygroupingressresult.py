from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class RevokeCacheSecurityGroupIngressResult:
    cache_security_group: Optional[CacheSecurityGroup] = field(default=None)
    
