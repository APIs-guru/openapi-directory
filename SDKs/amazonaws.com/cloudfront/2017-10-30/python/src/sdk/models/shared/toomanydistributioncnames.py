from dataclasses import dataclass, field
from typing import Optional


@dataclass
class TooManyDistributionCnamEs:
    r"""TooManyDistributionCnamEs
    Your request contains more CNAMEs than are allowed per distribution.
    """
    
    message: Optional[str] = field(default=None)
    
