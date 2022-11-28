from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class KeyGroupList:
    r"""KeyGroupList
    A list of key groups.
    """
    
    max_items: int = field()
    quantity: int = field()
    items: Optional[List[KeyGroupSummary]] = field(default=None)
    next_marker: Optional[str] = field(default=None)
    
