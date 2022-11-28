from dataclasses import dataclass, field
from typing import Optional


@dataclass
class DistributionAlreadyExists:
    r"""DistributionAlreadyExists
    The caller reference you attempted to create the distribution with is associated with another distribution.
    """
    
    message: Optional[str] = field(default=None)
    
