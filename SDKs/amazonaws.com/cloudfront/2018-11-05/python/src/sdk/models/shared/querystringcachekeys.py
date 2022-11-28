from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class QueryStringCacheKeys:
    quantity: int = field()
    items: Optional[List[str]] = field(default=None)
    
