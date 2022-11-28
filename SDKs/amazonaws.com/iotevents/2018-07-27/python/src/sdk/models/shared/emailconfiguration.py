from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class EmailConfiguration:
    r"""EmailConfiguration
    Contains the configuration information of email notifications.
    """
    
    from_: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('from') }})
    recipients: EmailRecipients = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('recipients') }})
    content: Optional[EmailContent] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('content') }})
    
