from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BatchStopJobRunResponse:
    errors: Optional[List[BatchStopJobRunError]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Errors') }})
    successful_submissions: Optional[List[BatchStopJobRunSuccessfulSubmission]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SuccessfulSubmissions') }})
    
