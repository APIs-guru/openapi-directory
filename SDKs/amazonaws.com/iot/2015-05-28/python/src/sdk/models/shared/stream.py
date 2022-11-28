from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Stream:
    r"""Stream
    Describes a group of files that can be streamed.
    """
    
    file_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fileId') }})
    stream_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('streamId') }})
    
