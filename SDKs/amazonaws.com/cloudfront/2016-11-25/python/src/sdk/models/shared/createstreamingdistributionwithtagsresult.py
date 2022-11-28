from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class CreateStreamingDistributionWithTagsResult:
    r"""CreateStreamingDistributionWithTagsResult
    The returned result of the corresponding request. 
    """
    
    streaming_distribution: Optional[StreamingDistribution] = field(default=None)
    
