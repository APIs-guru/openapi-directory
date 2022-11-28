from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class CachePolicyList:
    r"""CachePolicyList
    A list of cache policies.
    """
    
    max_items: int = field()
    quantity: int = field()
    items: Optional[List[CachePolicySummary]] = field(default=None)
    next_marker: Optional[str] = field(default=None)
    
