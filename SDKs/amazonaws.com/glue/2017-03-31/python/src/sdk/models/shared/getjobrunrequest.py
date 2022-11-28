from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GetJobRunRequest:
    job_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('JobName') }})
    run_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RunId') }})
    predecessors_included: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PredecessorsIncluded') }})
    
