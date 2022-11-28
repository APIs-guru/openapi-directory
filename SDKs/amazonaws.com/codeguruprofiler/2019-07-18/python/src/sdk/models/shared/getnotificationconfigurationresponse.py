from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GetNotificationConfigurationResponse:
    r"""GetNotificationConfigurationResponse
    The structure representing the GetNotificationConfigurationResponse.
    """
    
    notification_configuration: NotificationConfiguration = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('notificationConfiguration') }})
    
