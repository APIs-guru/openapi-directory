from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class ModifyEventSubscriptionResult:
    event_subscription: Optional[EventSubscription] = field(default=None)
    
