from dataclasses import dataclass, field
from typing import Optional


@dataclass
class IdentityNotificationAttributes:
    r"""IdentityNotificationAttributes
    Represents the notification attributes of an identity, including whether an identity has Amazon Simple Notification Service (Amazon SNS) topics set for bounce, complaint, and/or delivery notifications, and whether feedback forwarding is enabled for bounce and complaint notifications.
    """
    
    bounce_topic: str = field()
    complaint_topic: str = field()
    delivery_topic: str = field()
    forwarding_enabled: bool = field()
    headers_in_bounce_notifications_enabled: Optional[bool] = field(default=None)
    headers_in_complaint_notifications_enabled: Optional[bool] = field(default=None)
    headers_in_delivery_notifications_enabled: Optional[bool] = field(default=None)
    
