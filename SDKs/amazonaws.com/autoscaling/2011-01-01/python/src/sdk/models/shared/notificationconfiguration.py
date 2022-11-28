from dataclasses import dataclass, field
from typing import Optional


@dataclass
class NotificationConfiguration:
    r"""NotificationConfiguration
    Describes a notification.
    """
    
    auto_scaling_group_name: Optional[str] = field(default=None)
    notification_type: Optional[str] = field(default=None)
    topic_arn: Optional[str] = field(default=None)
    
