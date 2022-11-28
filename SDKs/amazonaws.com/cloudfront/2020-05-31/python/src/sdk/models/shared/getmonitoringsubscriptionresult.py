from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class GetMonitoringSubscriptionResult:
    monitoring_subscription: Optional[MonitoringSubscription] = field(default=None)
    
