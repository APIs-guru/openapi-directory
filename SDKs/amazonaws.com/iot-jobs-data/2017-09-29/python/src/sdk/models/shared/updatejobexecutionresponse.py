from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import jobexecutionstate


@dataclass_json
@dataclass
class UpdateJobExecutionResponse:
    execution_state: Optional[jobexecutionstate.JobExecutionState] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'executionState' }})
    job_document: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jobDocument' }})
    
