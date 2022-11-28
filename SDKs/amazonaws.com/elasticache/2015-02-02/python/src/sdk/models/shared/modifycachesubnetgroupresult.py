from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class ModifyCacheSubnetGroupResult:
    cache_subnet_group: Optional[CacheSubnetGroup] = field(default=None)
    
