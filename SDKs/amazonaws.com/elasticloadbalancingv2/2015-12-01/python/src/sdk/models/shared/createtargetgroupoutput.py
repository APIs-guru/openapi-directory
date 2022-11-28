from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class CreateTargetGroupOutput:
    target_groups: Optional[List[TargetGroup]] = field(default=None)
    
