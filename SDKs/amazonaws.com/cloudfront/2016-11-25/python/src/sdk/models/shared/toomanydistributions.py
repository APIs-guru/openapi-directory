from dataclasses import dataclass, field
from typing import Optional


@dataclass
class TooManyDistributions:
    r"""TooManyDistributions
    Processing your request would cause you to exceed the maximum number of distributions allowed.
    """
    
    message: Optional[str] = field(default=None)
    
