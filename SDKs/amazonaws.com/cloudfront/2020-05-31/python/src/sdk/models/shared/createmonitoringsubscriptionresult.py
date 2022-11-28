from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class CreateMonitoringSubscriptionResult:
    monitoring_subscription: Optional[MonitoringSubscription] = field(default=None)
    
