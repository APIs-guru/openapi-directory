from dataclasses import dataclass, field
from typing import Optional


@dataclass
class ConnectionDraining:
    r"""ConnectionDraining
    Information about the <code>ConnectionDraining</code> attribute.
    """
    
    enabled: bool = field()
    timeout: Optional[int] = field(default=None)
    
