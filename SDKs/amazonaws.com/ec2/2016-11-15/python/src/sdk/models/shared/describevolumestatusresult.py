from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DescribeVolumeStatusResult:
    next_token: Optional[str] = field(default=None)
    volume_statuses: Optional[List[VolumeStatusItem]] = field(default=None)
    
