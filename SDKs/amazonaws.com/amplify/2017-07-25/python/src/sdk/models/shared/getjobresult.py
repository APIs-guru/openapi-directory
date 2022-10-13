from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import job


@dataclass_json
@dataclass
class GetJobResult:
    job: job.Job = field(default=None, metadata={'dataclasses_json': { 'field_name': 'job' }})
    
