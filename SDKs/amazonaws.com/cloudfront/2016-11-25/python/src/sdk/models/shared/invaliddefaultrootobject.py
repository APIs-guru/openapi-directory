from dataclasses import dataclass, field
from typing import Optional


@dataclass
class InvalidDefaultRootObject:
    r"""InvalidDefaultRootObject
    The default root object file name is too big or contains an invalid character.
    """
    
    message: Optional[str] = field(default=None)
    
