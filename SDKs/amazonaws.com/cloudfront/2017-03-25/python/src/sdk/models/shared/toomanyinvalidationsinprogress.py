from dataclasses import dataclass, field
from typing import Optional


@dataclass
class TooManyInvalidationsInProgress:
    r"""TooManyInvalidationsInProgress
    You have exceeded the maximum number of allowable InProgress invalidation batch requests, or invalidation objects.
    """
    
    message: Optional[str] = field(default=None)
    
