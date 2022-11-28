from dataclasses import dataclass, field
from typing import Optional


@dataclass
class NoSuchInvalidation:
    r"""NoSuchInvalidation
    The specified invalidation does not exist.
    """
    
    message: Optional[str] = field(default=None)
    
