from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DescribeVpcEndpointConnectionNotificationsResult:
    connection_notification_set: Optional[List[ConnectionNotification]] = field(default=None)
    next_token: Optional[str] = field(default=None)
    
