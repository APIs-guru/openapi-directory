from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class FunctionList:
    r"""FunctionList
    A list of CloudFront functions.
    """
    
    max_items: int = field()
    quantity: int = field()
    items: Optional[List[FunctionSummary]] = field(default=None)
    next_marker: Optional[str] = field(default=None)
    
