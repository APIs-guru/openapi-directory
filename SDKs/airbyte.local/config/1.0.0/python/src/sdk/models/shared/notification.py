from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import notificationtype_enum
from . import slacknotificationconfiguration


@dataclass_json
@dataclass
class Notification:
    notification_type: notificationtype_enum.NotificationTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'notificationType' }})
    slack_configuration: Optional[slacknotificationconfiguration.SlackNotificationConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'slackConfiguration' }})
    
