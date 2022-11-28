from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class GetInvalidationResult:
    r"""GetInvalidationResult
    The returned result of the corresponding request.
    """
    
    invalidation: Optional[Invalidation] = field(default=None)
    
