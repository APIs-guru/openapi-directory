from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class CreateDistributionWithTagsResult:
    r"""CreateDistributionWithTagsResult
    The returned result of the corresponding request. 
    """
    
    distribution: Optional[Distribution] = field(default=None)
    
