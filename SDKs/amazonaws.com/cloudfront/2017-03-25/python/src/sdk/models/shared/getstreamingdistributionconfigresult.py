from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class GetStreamingDistributionConfigResult:
    r"""GetStreamingDistributionConfigResult
    The returned result of the corresponding request.
    """
    
    streaming_distribution_config: Optional[StreamingDistributionConfig] = field(default=None)
    
