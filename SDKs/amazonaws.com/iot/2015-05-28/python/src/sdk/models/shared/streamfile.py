from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class StreamFile:
    r"""StreamFile
    Represents a file to stream.
    """
    
    file_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fileId') }})
    s3_location: Optional[S3Location] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('s3Location') }})
    
