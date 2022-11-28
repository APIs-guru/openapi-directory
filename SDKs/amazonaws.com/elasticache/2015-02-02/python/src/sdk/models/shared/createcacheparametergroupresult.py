from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class CreateCacheParameterGroupResult:
    cache_parameter_group: Optional[CacheParameterGroup] = field(default=None)
    
