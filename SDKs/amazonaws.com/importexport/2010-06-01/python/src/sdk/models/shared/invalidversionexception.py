from dataclasses import dataclass, field
from typing import Optional


@dataclass
class InvalidVersionException:
    r"""InvalidVersionException
    The client tool version is invalid.
    """
    
    message: Optional[str] = field(default=None)
    
