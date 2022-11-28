from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class CustomHeaders:
    r"""CustomHeaders
    A complex type that contains the list of Custom Headers for each origin. 
    """
    
    quantity: int = field()
    items: Optional[List[OriginCustomHeader]] = field(default=None)
    
