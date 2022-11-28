from dataclasses import dataclass, field
from typing import Optional


@dataclass
class AccessDenied:
    r"""AccessDenied
    Access denied.
    """
    
    message: Optional[str] = field(default=None)
    
