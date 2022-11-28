from dataclasses import dataclass, field
from typing import Optional


@dataclass
class InvalidIfMatchVersion:
    r"""InvalidIfMatchVersion
    The <code>If-Match</code> version is missing or not valid for the distribution.
    """
    
    message: Optional[str] = field(default=None)
    
