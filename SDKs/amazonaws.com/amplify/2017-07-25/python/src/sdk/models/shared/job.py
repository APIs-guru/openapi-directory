from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import step
from . import jobsummary


@dataclass_json
@dataclass
class Job:
    steps: List[step.Step] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'steps' }})
    summary: jobsummary.JobSummary = field(default=None, metadata={'dataclasses_json': { 'field_name': 'summary' }})
    
