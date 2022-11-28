from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class Aliases:
    r"""Aliases
    A complex type that contains information about CNAMEs (alternate domain names), if any, for this distribution. 
    """
    
    quantity: int = field()
    items: Optional[List[str]] = field(default=None)
    
