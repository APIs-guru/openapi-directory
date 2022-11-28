from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DescribeNotificationConfigurationsAnswer:
    notification_configurations: List[NotificationConfiguration] = field()
    next_token: Optional[str] = field(default=None)
    
