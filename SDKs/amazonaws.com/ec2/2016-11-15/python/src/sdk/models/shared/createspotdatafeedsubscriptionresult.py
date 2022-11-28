from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class CreateSpotDatafeedSubscriptionResult:
    r"""CreateSpotDatafeedSubscriptionResult
    Contains the output of CreateSpotDatafeedSubscription.
    """
    
    spot_datafeed_subscription: Optional[SpotDatafeedSubscription] = field(default=None)
    
