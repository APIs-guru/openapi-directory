from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class MessageTemplateType:
    email_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EmailMessage' }})
    email_subject: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EmailSubject' }})
    sms_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SMSMessage' }})
    
