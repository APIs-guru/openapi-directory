from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class S3Location:
    r"""S3Location
    The S3 location.
    """
    
    bucket: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bucket') }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    
