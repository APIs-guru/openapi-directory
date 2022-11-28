from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from . import *


@dataclass
class ConnectionNotification:
    r"""ConnectionNotification
    Describes a connection notification for a VPC endpoint or VPC endpoint service.
    """
    
    connection_events: Optional[List[str]] = field(default=None)
    connection_notification_arn: Optional[str] = field(default=None)
    connection_notification_id: Optional[str] = field(default=None)
    connection_notification_state: Optional[ConnectionNotificationStateEnum] = field(default=None)
    connection_notification_type: Optional[ConnectionNotificationTypeEnum] = field(default=None)
    service_id: Optional[str] = field(default=None)
    vpc_endpoint_id: Optional[str] = field(default=None)
    
