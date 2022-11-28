from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class ListDistributionsByKeyGroupResult:
    distribution_id_list: Optional[DistributionIDList] = field(default=None)
    
