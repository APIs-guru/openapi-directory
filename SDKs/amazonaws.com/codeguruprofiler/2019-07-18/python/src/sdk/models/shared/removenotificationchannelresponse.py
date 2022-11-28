from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class RemoveNotificationChannelResponse:
    r"""RemoveNotificationChannelResponse
    The structure representing the RemoveNotificationChannelResponse.
    """
    
    notification_configuration: Optional[NotificationConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notificationConfiguration') }})
    
