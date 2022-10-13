from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import deliverymethod_enum
from . import emailsettings
from . import smssettings


@dataclass_json
@dataclass
class UpdateBackendAuthForgotPasswordConfig:
    delivery_method: Optional[deliverymethod_enum.DeliveryMethodEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeliveryMethod' }})
    email_settings: Optional[emailsettings.EmailSettings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EmailSettings' }})
    sms_settings: Optional[smssettings.SmsSettings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SmsSettings' }})
    
