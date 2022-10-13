from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import smsconfigurationtype


@dataclass_json
@dataclass
class SmsMfaConfigType:
    sms_authentication_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SmsAuthenticationMessage' }})
    sms_configuration: Optional[smsconfigurationtype.SmsConfigurationType] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SmsConfiguration' }})
    
