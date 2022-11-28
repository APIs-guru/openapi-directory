from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class VerificationMessageTemplateType:
    r"""VerificationMessageTemplateType
    The template for verification messages.
    """
    
    default_email_option: Optional[DefaultEmailOptionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DefaultEmailOption') }})
    email_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EmailMessage') }})
    email_message_by_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EmailMessageByLink') }})
    email_subject: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EmailSubject') }})
    email_subject_by_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EmailSubjectByLink') }})
    sms_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SmsMessage') }})
    
