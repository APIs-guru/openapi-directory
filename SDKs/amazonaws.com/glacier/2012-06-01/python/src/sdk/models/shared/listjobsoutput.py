from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import glacierjobdescription


@dataclass_json
@dataclass
class ListJobsOutput:
    job_list: Optional[List[glacierjobdescription.GlacierJobDescription]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'JobList' }})
    marker: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Marker' }})
    
