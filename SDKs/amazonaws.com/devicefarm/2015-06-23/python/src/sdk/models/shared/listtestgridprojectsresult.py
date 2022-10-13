from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import testgridproject


@dataclass_json
@dataclass
class ListTestGridProjectsResult:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    test_grid_projects: Optional[List[testgridproject.TestGridProject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'testGridProjects' }})
    
