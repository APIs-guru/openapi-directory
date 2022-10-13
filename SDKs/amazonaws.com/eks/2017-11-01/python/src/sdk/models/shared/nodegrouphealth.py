from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import issue


@dataclass_json
@dataclass
class NodegroupHealth:
    issues: Optional[List[issue.Issue]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'issues' }})
    
