from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AttemptDetail:
    r"""AttemptDetail
    An object representing a job attempt.
    """
    
    container: Optional[AttemptContainerDetail] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('container') }})
    started_at: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startedAt') }})
    status_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('statusReason') }})
    stopped_at: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stoppedAt') }})
    
