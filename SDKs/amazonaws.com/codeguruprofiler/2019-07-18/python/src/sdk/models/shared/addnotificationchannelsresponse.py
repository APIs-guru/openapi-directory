from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import notificationconfiguration


@dataclass_json
@dataclass
class AddNotificationChannelsResponse:
    notification_configuration: Optional[notificationconfiguration.NotificationConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'notificationConfiguration' }})
    
