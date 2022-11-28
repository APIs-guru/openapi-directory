from dataclasses import dataclass, field
from typing import List


@dataclass
class StatusCodes:
    r"""StatusCodes
    A complex data type for the status codes that you specify that, when returned by a primary origin, trigger CloudFront to failover to a second origin.
    """
    
    items: List[int] = field()
    quantity: int = field()
    
