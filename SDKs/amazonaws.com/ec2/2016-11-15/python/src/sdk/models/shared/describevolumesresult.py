from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DescribeVolumesResult:
    next_token: Optional[str] = field(default=None)
    volumes: Optional[List[Volume]] = field(default=None)
    
