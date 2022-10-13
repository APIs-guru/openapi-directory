from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import attemptinforead
from . import jobread


@dataclass_json
@dataclass
class JobInfoRead:
    attempts: List[attemptinforead.AttemptInfoRead] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attempts' }})
    job: jobread.JobRead = field(default=None, metadata={'dataclasses_json': { 'field_name': 'job' }})
    
