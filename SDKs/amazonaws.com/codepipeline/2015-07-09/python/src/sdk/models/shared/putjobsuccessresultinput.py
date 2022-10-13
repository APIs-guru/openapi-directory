from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import currentrevision
from . import executiondetails


@dataclass_json
@dataclass
class PutJobSuccessResultInput:
    continuation_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'continuationToken' }})
    current_revision: Optional[currentrevision.CurrentRevision] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currentRevision' }})
    execution_details: Optional[executiondetails.ExecutionDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'executionDetails' }})
    job_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jobId' }})
    output_variables: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'outputVariables' }})
    
