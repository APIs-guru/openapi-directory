from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class Tags:
    r"""Tags
     A complex type that contains zero or more <code>Tag</code> elements.
    """
    
    items: Optional[List[Tag]] = field(default=None)
    
