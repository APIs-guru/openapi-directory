from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ShareDirectoryRequest:
    directory_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DirectoryId') }})
    share_method: ShareMethodEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ShareMethod') }})
    share_target: ShareTarget = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ShareTarget') }})
    share_notes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ShareNotes') }})
    
