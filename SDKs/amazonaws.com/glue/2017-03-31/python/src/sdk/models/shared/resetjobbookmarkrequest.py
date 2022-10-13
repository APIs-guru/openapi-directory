from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ResetJobBookmarkRequest:
    job_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'JobName' }})
    run_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RunId' }})
    
