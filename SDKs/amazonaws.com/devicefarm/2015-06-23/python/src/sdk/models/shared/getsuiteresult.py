from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import suite


@dataclass_json
@dataclass
class GetSuiteResult:
    suite: Optional[suite.Suite] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'suite' }})
    
