from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class RetainedMessageSummary:
    r"""RetainedMessageSummary
    Information about a single retained message.
    """
    
    last_modified_time: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastModifiedTime') }})
    payload_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('payloadSize') }})
    qos: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('qos') }})
    topic: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('topic') }})
    
