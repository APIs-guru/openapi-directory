from dataclasses import dataclass, field
from typing import Optional


@dataclass
class NoSuchDistribution:
    r"""NoSuchDistribution
    The specified distribution does not exist.
    """
    
    message: Optional[str] = field(default=None)
    
