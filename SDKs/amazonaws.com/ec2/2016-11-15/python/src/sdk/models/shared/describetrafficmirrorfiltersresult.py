from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DescribeTrafficMirrorFiltersResult:
    next_token: Optional[str] = field(default=None)
    traffic_mirror_filters: Optional[List[TrafficMirrorFilter]] = field(default=None)
    
