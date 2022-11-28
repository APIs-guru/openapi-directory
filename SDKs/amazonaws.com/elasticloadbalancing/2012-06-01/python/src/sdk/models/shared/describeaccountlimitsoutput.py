from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DescribeAccountLimitsOutput:
    limits: Optional[List[Limit]] = field(default=None)
    next_marker: Optional[str] = field(default=None)
    
