from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class ListDistributionsByRealtimeLogConfigResult:
    distribution_list: Optional[DistributionList] = field(default=None)
    
