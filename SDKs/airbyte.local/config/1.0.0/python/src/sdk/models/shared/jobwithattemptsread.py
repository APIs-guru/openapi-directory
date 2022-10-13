from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import attemptread
from . import jobread


@dataclass_json
@dataclass
class JobWithAttemptsRead:
    attempts: Optional[List[attemptread.AttemptRead]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attempts' }})
    job: Optional[jobread.JobRead] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'job' }})
    
