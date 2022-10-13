from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import project


@dataclass_json
@dataclass
class ListProjectsResult:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    projects: Optional[List[project.Project]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'projects' }})
    
