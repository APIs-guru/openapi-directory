from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DescribeClassicLinkInstancesResult:
    instances: Optional[List[ClassicLinkInstance]] = field(default=None)
    next_token: Optional[str] = field(default=None)
    
