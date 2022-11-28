from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class GetStreamingDistributionResult:
    r"""GetStreamingDistributionResult
    The returned result of the corresponding request.
    """
    
    streaming_distribution: Optional[StreamingDistribution] = field(default=None)
    
