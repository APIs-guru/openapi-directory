from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class ListDistributionsResult:
    r"""ListDistributionsResult
    The returned result of the corresponding request. 
    """
    
    distribution_list: Optional[DistributionList] = field(default=None)
    
