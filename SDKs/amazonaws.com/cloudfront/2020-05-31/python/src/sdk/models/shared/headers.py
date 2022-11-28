from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class Headers:
    r"""Headers
    Contains a list of HTTP header names.
    """
    
    quantity: int = field()
    items: Optional[List[str]] = field(default=None)
    
