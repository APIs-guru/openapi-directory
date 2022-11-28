from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class CacheBehaviors:
    r"""CacheBehaviors
    A complex type that contains zero or more <code>CacheBehavior</code> elements. 
    """
    
    quantity: int = field()
    items: Optional[List[CacheBehavior]] = field(default=None)
    
