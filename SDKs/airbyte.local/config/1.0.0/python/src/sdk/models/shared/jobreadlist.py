from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import jobwithattemptsread


@dataclass_json
@dataclass
class JobReadList:
    jobs: List[jobwithattemptsread.JobWithAttemptsRead] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jobs' }})
    
