from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class QueryStringCacheKeys:
    r"""QueryStringCacheKeys
    A complex type that contains information about the query string parameters that you want CloudFront to use for caching for a cache behavior. 
    """
    
    quantity: int = field()
    items: Optional[List[str]] = field(default=None)
    
