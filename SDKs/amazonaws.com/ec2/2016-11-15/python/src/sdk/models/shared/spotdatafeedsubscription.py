from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from . import *


@dataclass
class SpotDatafeedSubscription:
    r"""SpotDatafeedSubscription
    Describes the data feed for a Spot Instance.
    """
    
    bucket: Optional[str] = field(default=None)
    fault: Optional[SpotInstanceStateFault] = field(default=None)
    owner_id: Optional[str] = field(default=None)
    prefix: Optional[str] = field(default=None)
    state: Optional[DatafeedSubscriptionStateEnum] = field(default=None)
    
