from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class CookieNames:
    r"""CookieNames
    Contains a list of cookie names.
    """
    
    quantity: int = field()
    items: Optional[List[str]] = field(default=None)
    
