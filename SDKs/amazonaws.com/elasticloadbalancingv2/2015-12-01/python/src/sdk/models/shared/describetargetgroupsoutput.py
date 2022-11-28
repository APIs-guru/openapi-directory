from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DescribeTargetGroupsOutput:
    next_marker: Optional[str] = field(default=None)
    target_groups: Optional[List[TargetGroup]] = field(default=None)
    
