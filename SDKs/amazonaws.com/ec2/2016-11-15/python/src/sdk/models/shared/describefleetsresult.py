from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DescribeFleetsResult:
    fleets: Optional[List[FleetData]] = field(default=None)
    next_token: Optional[str] = field(default=None)
    
