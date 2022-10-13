from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class UpdateProjectRequest:
    arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'arn' }})
    default_job_timeout_minutes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'defaultJobTimeoutMinutes' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    
