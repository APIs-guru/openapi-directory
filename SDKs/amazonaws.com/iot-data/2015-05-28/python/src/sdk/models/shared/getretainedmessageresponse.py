from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GetRetainedMessageResponse:
    r"""GetRetainedMessageResponse
    The output from the GetRetainedMessage operation.
    """
    
    last_modified_time: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastModifiedTime') }})
    payload: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('payload') }})
    qos: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('qos') }})
    topic: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('topic') }})
    
