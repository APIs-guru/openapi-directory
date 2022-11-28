from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Message:
    r"""Message
    Information about a message.
    """
    
    message_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('messageId') }})
    payload: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('payload') }})
    
