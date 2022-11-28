from dataclasses import dataclass, field
from typing import Optional


@dataclass
class InvalidCustomsException:
    r"""InvalidCustomsException
    One or more customs parameters was invalid. Please correct and resubmit.
    """
    
    message: Optional[str] = field(default=None)
    
