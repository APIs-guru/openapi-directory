from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import testgridsession


@dataclass_json
@dataclass
class GetTestGridSessionResult:
    test_grid_session: Optional[testgridsession.TestGridSession] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'testGridSession' }})
    
