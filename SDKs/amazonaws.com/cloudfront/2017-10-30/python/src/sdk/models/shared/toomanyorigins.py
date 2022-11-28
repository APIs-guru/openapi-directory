from dataclasses import dataclass, field
from typing import Optional


@dataclass
class TooManyOrigins:
    r"""TooManyOrigins
    You cannot create more origins for the distribution.
    """
    
    message: Optional[str] = field(default=None)
    
