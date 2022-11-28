from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class DescribeSpotDatafeedSubscriptionResult:
    r"""DescribeSpotDatafeedSubscriptionResult
    Contains the output of DescribeSpotDatafeedSubscription.
    """
    
    spot_datafeed_subscription: Optional[SpotDatafeedSubscription] = field(default=None)
    
