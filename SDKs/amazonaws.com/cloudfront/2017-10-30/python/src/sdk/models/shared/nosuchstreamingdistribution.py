from dataclasses import dataclass, field
from typing import Optional


@dataclass
class NoSuchStreamingDistribution:
    r"""NoSuchStreamingDistribution
    The specified streaming distribution does not exist.
    """
    
    message: Optional[str] = field(default=None)
    
