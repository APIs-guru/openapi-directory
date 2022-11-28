from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class GetDistributionConfigResult:
    r"""GetDistributionConfigResult
    The returned result of the corresponding request.
    """
    
    distribution_config: Optional[DistributionConfig] = field(default=None)
    
