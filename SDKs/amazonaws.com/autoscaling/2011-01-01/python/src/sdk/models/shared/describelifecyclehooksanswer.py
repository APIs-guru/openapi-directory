from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DescribeLifecycleHooksAnswer:
    lifecycle_hooks: Optional[List[LifecycleHook]] = field(default=None)
    
