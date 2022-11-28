from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BatchGetJobsResponse:
    jobs: Optional[List[Job]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Jobs') }})
    jobs_not_found: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('JobsNotFound') }})
    
