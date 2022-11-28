from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DescribeSpotPriceHistoryResult:
    r"""DescribeSpotPriceHistoryResult
    Contains the output of DescribeSpotPriceHistory.
    """
    
    next_token: Optional[str] = field(default=None)
    spot_price_history: Optional[List[SpotPrice]] = field(default=None)
    
