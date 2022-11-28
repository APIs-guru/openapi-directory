from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from . import *


@dataclass
class TagSpecification:
    r"""TagSpecification
    The tags to apply to a resource when the resource is being created.
    """
    
    resource_type: Optional[ResourceTypeEnum] = field(default=None)
    tags: Optional[List[Tag]] = field(default=None)
    
