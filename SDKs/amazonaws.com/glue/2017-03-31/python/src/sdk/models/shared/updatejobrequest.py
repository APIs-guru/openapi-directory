from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import jobupdate


@dataclass_json
@dataclass
class UpdateJobRequest:
    job_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'JobName' }})
    job_update: jobupdate.JobUpdate = field(default=None, metadata={'dataclasses_json': { 'field_name': 'JobUpdate' }})
    
