from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListUploadsResult:
    r"""ListUploadsResult
    Represents the result of a list uploads request.
    """
    
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    uploads: Optional[List[Upload]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uploads') }})
    
