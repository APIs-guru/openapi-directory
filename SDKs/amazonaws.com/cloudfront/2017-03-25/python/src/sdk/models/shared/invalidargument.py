from dataclasses import dataclass, field
from typing import Optional


@dataclass
class InvalidArgument:
    r"""InvalidArgument
    The argument is invalid.
    """
    
    message: Optional[str] = field(default=None)
    
