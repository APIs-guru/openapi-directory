from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DistributionList:
    r"""DistributionList
    A distribution list.
    """
    
    is_truncated: bool = field()
    marker: str = field()
    max_items: int = field()
    quantity: int = field()
    items: Optional[List[DistributionSummary]] = field(default=None)
    next_marker: Optional[str] = field(default=None)
    
