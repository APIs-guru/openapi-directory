from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class NotificationAction:
    r"""NotificationAction
    Contains the notification settings of an alarm model. The settings apply to all alarms that were created based on this alarm model.
    """
    
    action: NotificationTargetActions = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    email_configurations: Optional[List[EmailConfiguration]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('emailConfigurations') }})
    sms_configurations: Optional[List[SmsConfiguration]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('smsConfigurations') }})
    
