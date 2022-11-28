from dataclasses import dataclass, field
from typing import Optional


@dataclass
class InvalidRelativePath:
    r"""InvalidRelativePath
    The relative path is too big, is not URL-encoded, or does not begin with a slash (/).
    """
    
    message: Optional[str] = field(default=None)
    
