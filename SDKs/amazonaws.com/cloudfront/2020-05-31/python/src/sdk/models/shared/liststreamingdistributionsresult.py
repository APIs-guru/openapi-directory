from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class ListStreamingDistributionsResult:
    r"""ListStreamingDistributionsResult
    The returned result of the corresponding request. 
    """
    
    streaming_distribution_list: Optional[StreamingDistributionList] = field(default=None)
    
