from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class DescribeAutoScalingNotificationTypesAnswer:
    auto_scaling_notification_types: Optional[List[str]] = field(default=None)
    
