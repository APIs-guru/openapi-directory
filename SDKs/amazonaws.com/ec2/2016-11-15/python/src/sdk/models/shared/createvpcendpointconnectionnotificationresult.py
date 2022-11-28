from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class CreateVpcEndpointConnectionNotificationResult:
    client_token: Optional[str] = field(default=None)
    connection_notification: Optional[ConnectionNotification] = field(default=None)
    
