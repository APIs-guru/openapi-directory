from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class DistributionIDList:
    r"""DistributionIDList
    A list of distribution IDs.
    """
    
    is_truncated: bool = field()
    marker: str = field()
    max_items: int = field()
    quantity: int = field()
    items: Optional[List[str]] = field(default=None)
    next_marker: Optional[str] = field(default=None)
    
