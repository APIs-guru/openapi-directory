from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import arrayjobdependency_enum


@dataclass_json
@dataclass
class JobDependency:
    job_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jobId' }})
    type: Optional[arrayjobdependency_enum.ArrayJobDependencyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
