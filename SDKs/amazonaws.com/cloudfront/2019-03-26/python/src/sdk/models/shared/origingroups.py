from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class OriginGroups:
    r"""OriginGroups
    A complex data type for the origin groups specified for a distribution.
    """
    
    quantity: int = field()
    items: Optional[List[OriginGroup]] = field(default=None)
    
