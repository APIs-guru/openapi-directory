from dataclasses import dataclass, field
from typing import Optional


@dataclass
class BaseException:
    r"""BaseException
    An error occurred while processing the request.
    """
    
    code: Optional[str] = field(default=None)
    message: Optional[str] = field(default=None)
    
