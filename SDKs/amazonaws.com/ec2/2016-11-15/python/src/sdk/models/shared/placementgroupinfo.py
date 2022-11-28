from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from . import *


@dataclass
class PlacementGroupInfo:
    r"""PlacementGroupInfo
    Describes the placement group support of the instance type.
    """
    
    supported_strategies: Optional[List[PlacementGroupStrategyEnum]] = field(default=None)
    
