from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import testgridproject


@dataclass_json
@dataclass
class GetTestGridProjectResult:
    test_grid_project: Optional[testgridproject.TestGridProject] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'testGridProject' }})
    
