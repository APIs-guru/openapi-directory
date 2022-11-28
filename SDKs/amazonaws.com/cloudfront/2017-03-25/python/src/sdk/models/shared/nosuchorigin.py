from dataclasses import dataclass, field
from typing import Optional


@dataclass
class NoSuchOrigin:
    r"""NoSuchOrigin
    No origin exists with the specified <code>Origin Id</code>. 
    """
    
    message: Optional[str] = field(default=None)
    
