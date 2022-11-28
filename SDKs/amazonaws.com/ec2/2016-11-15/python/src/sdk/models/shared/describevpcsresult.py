from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DescribeVpcsResult:
    next_token: Optional[str] = field(default=None)
    vpcs: Optional[List[Vpc]] = field(default=None)
    
