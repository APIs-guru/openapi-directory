from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CreateProjectRequest:
    default_job_timeout_minutes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'defaultJobTimeoutMinutes' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    
