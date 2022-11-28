from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Message:
    r"""Message
    Information about a message.
    """
    
    input_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('inputName') }})
    message_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('messageId') }})
    payload: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('payload') }})
    timestamp: Optional[TimestampValue] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timestamp') }})
    
