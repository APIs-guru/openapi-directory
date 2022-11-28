from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from . import *


@dataclass
class PlacementGroup:
    r"""PlacementGroup
    Describes a placement group.
    """
    
    group_id: Optional[str] = field(default=None)
    group_name: Optional[str] = field(default=None)
    partition_count: Optional[int] = field(default=None)
    state: Optional[PlacementGroupStateEnum] = field(default=None)
    strategy: Optional[PlacementStrategyEnum] = field(default=None)
    tags: Optional[List[Tag]] = field(default=None)
    
