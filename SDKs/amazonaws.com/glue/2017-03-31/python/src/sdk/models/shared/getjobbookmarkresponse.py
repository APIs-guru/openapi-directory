from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import jobbookmarkentry


@dataclass_json
@dataclass
class GetJobBookmarkResponse:
    job_bookmark_entry: Optional[jobbookmarkentry.JobBookmarkEntry] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'JobBookmarkEntry' }})
    
