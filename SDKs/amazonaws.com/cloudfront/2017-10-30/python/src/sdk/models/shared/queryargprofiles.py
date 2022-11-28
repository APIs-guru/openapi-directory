from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class QueryArgProfiles:
    r"""QueryArgProfiles
    Query argument-profile mapping for field-level encryption.
    """
    
    quantity: int = field()
    items: Optional[List[QueryArgProfile]] = field(default=None)
    
