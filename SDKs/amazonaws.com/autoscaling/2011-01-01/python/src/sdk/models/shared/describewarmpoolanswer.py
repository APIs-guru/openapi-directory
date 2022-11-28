from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DescribeWarmPoolAnswer:
    instances: Optional[List[Instance]] = field(default=None)
    next_token: Optional[str] = field(default=None)
    warm_pool_configuration: Optional[WarmPoolConfiguration] = field(default=None)
    
