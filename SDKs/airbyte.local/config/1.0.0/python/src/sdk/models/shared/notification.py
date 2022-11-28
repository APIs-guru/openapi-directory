from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Notification:
    notification_type: NotificationTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('notificationType') }})
    slack_configuration: Optional[SlackNotificationConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('slackConfiguration') }})
    
