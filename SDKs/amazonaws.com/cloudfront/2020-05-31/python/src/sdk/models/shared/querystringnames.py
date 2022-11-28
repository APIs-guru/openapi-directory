from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class QueryStringNames:
    r"""QueryStringNames
    Contains a list of query string names.
    """
    
    quantity: int = field()
    items: Optional[List[str]] = field(default=None)
    
