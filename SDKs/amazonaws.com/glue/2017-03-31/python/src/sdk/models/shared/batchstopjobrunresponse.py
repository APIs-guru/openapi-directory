from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import batchstopjobrunerror
from . import batchstopjobrunsuccessfulsubmission


@dataclass_json
@dataclass
class BatchStopJobRunResponse:
    errors: Optional[List[batchstopjobrunerror.BatchStopJobRunError]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Errors' }})
    successful_submissions: Optional[List[batchstopjobrunsuccessfulsubmission.BatchStopJobRunSuccessfulSubmission]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SuccessfulSubmissions' }})
    
