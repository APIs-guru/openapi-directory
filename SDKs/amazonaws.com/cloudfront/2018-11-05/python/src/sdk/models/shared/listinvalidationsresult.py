from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class ListInvalidationsResult:
    r"""ListInvalidationsResult
    The returned result of the corresponding request. 
    """
    
    invalidation_list: Optional[InvalidationList] = field(default=None)
    
