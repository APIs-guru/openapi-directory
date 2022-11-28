from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from . import *


@dataclass
class SpotFleetTagSpecification:
    r"""SpotFleetTagSpecification
    The tags for a Spot Fleet resource.
    """
    
    resource_type: Optional[ResourceTypeEnum] = field(default=None)
    tags: Optional[List[Tag]] = field(default=None)
    
