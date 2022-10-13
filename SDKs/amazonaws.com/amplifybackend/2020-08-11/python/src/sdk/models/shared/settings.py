from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import mfatypeselement_enum


@dataclass_json
@dataclass
class Settings:
    mfa_types: Optional[List[mfatypeselement_enum.MfaTypesElementEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MfaTypes' }})
    sms_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SmsMessage' }})
    
