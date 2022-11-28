from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DescribeRegionsResult:
    regions: Optional[List[Region]] = field(default=None)
    
