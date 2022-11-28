from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class CreateDistributionResult:
    r"""CreateDistributionResult
    The returned result of the corresponding request.
    """
    
    distribution: Optional[Distribution] = field(default=None)
    
