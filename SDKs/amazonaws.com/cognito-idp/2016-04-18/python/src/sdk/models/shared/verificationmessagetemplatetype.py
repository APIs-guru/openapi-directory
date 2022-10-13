from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import defaultemailoptiontype_enum


@dataclass_json
@dataclass
class VerificationMessageTemplateType:
    default_email_option: Optional[defaultemailoptiontype_enum.DefaultEmailOptionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DefaultEmailOption' }})
    email_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EmailMessage' }})
    email_message_by_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EmailMessageByLink' }})
    email_subject: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EmailSubject' }})
    email_subject_by_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EmailSubjectByLink' }})
    sms_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SmsMessage' }})
    
