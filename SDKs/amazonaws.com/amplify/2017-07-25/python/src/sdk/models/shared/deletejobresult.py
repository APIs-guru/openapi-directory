from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import jobsummary


@dataclass_json
@dataclass
class DeleteJobResult:
    job_summary: jobsummary.JobSummary = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jobSummary' }})
    
