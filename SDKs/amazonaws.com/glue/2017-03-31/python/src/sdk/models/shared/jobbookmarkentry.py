from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class JobBookmarkEntry:
    attempt: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Attempt' }})
    job_bookmark: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'JobBookmark' }})
    job_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'JobName' }})
    previous_run_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PreviousRunId' }})
    run: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Run' }})
    run_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RunId' }})
    version: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Version' }})
    
