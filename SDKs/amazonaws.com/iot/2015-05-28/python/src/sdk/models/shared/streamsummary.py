from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class StreamSummary:
    r"""StreamSummary
    A summary of a stream.
    """
    
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    stream_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('streamArn') }})
    stream_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('streamId') }})
    stream_version: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('streamVersion') }})
    
