from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import groupresult


@dataclass_json
@dataclass
class TestResult:
    groups: Optional[List[groupresult.GroupResult]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'groups' }})
    
