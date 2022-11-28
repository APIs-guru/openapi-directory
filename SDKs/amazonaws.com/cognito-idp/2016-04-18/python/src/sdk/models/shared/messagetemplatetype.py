from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class MessageTemplateType:
    r"""MessageTemplateType
    The message template structure.
    """
    
    email_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EmailMessage') }})
    email_subject: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EmailSubject') }})
    sms_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SMSMessage') }})
    
