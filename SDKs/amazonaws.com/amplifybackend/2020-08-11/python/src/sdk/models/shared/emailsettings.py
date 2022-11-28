from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class EmailSettings:
    r"""EmailSettings
    The configuration for the email sent when an app user forgets their password.
    """
    
    email_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EmailMessage') }})
    email_subject: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EmailSubject') }})
    
