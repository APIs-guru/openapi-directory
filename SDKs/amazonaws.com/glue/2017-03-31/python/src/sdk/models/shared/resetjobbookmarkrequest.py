from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ResetJobBookmarkRequest:
    job_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('JobName') }})
    run_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RunId') }})
    
