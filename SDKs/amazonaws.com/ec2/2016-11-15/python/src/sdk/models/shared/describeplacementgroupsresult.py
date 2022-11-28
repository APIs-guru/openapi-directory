from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DescribePlacementGroupsResult:
    placement_groups: Optional[List[PlacementGroup]] = field(default=None)
    
