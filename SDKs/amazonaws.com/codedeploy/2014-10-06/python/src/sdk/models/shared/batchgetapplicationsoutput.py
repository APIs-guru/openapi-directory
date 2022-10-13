from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import applicationinfo


@dataclass_json
@dataclass
class BatchGetApplicationsOutput:
    applications_info: Optional[List[applicationinfo.ApplicationInfo]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'applicationsInfo' }})
    
