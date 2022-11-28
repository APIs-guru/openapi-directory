from dataclasses import dataclass, field
from typing import Optional


@dataclass
class TooManyCacheBehaviors:
    r"""TooManyCacheBehaviors
    You cannot create more cache behaviors for the distribution.
    """
    
    message: Optional[str] = field(default=None)
    
