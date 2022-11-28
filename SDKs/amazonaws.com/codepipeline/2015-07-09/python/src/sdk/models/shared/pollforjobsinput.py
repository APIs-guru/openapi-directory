from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PollForJobsInput:
    r"""PollForJobsInput
    Represents the input of a <code>PollForJobs</code> action.
    """
    
    action_type_id: ActionTypeID = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('actionTypeId') }})
    max_batch_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxBatchSize') }})
    query_param: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('queryParam') }})
    
