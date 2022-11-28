from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PutJobSuccessResultInput:
    r"""PutJobSuccessResultInput
    Represents the input of a <code>PutJobSuccessResult</code> action.
    """
    
    job_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobId') }})
    continuation_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('continuationToken') }})
    current_revision: Optional[CurrentRevision] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currentRevision') }})
    execution_details: Optional[ExecutionDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('executionDetails') }})
    output_variables: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('outputVariables') }})
    
