from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import thirdpartyjob


@dataclass_json
@dataclass
class PollForThirdPartyJobsOutput:
    jobs: Optional[List[thirdpartyjob.ThirdPartyJob]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jobs' }})
    
