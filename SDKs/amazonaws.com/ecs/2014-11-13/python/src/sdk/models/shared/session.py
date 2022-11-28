from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Session:
    r"""Session
    The details of the execute command session.
    """
    
    session_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sessionId') }})
    stream_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('streamUrl') }})
    token_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tokenValue') }})
    
