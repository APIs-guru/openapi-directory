from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import notificationconfiguration


@dataclass_json
@dataclass
class GetNotificationConfigurationResponse:
    notification_configuration: notificationconfiguration.NotificationConfiguration = field(default=None, metadata={'dataclasses_json': { 'field_name': 'notificationConfiguration' }})
    
