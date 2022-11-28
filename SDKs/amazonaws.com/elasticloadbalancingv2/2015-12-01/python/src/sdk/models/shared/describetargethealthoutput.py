from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DescribeTargetHealthOutput:
    target_health_descriptions: Optional[List[TargetHealthDescription]] = field(default=None)
    
