from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class DescribeLifecycleHookTypesAnswer:
    lifecycle_hook_types: Optional[List[str]] = field(default=None)
    
