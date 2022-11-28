from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SmsConfiguration:
    r"""SmsConfiguration
    Contains the configuration information of SMS notifications.
    """
    
    recipients: List[RecipientDetail] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('recipients') }})
    additional_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('additionalMessage') }})
    sender_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('senderId') }})
    
