from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class CreatePlacementGroupResult:
    placement_group: Optional[PlacementGroup] = field(default=None)
    
