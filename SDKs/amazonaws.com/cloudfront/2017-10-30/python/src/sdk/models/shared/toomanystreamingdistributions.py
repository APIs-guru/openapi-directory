from dataclasses import dataclass, field
from typing import Optional


@dataclass
class TooManyStreamingDistributions:
    r"""TooManyStreamingDistributions
    Processing your request would cause you to exceed the maximum number of streaming distributions allowed.
    """
    
    message: Optional[str] = field(default=None)
    
