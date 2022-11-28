from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class PoliciesType:
    next_token: Optional[str] = field(default=None)
    scaling_policies: Optional[List[ScalingPolicy]] = field(default=None)
    
