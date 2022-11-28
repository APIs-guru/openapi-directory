from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Task:
    r"""Task
    Task object encapsulating task information.
    """
    
    status: StatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    progress_percent: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProgressPercent') }})
    status_detail: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StatusDetail') }})
    
