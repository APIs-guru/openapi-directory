from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class GetDistributionResult:
    r"""GetDistributionResult
    The returned result of the corresponding request.
    """
    
    distribution: Optional[Distribution] = field(default=None)
    
