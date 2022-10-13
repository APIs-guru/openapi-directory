from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import notificationtargetactions
from . import emailconfiguration
from . import smsconfiguration


@dataclass_json
@dataclass
class NotificationAction:
    action: notificationtargetactions.NotificationTargetActions = field(default=None, metadata={'dataclasses_json': { 'field_name': 'action' }})
    email_configurations: Optional[List[emailconfiguration.EmailConfiguration]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'emailConfigurations' }})
    sms_configurations: Optional[List[smsconfiguration.SmsConfiguration]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'smsConfigurations' }})
    
