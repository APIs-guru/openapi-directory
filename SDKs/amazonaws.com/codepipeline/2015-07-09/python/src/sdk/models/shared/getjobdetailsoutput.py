from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import jobdetails


@dataclass_json
@dataclass
class GetJobDetailsOutput:
    job_details: Optional[jobdetails.JobDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jobDetails' }})
    
