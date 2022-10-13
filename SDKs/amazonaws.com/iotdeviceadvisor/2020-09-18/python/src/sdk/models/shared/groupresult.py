from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import testcaserun


@dataclass_json
@dataclass
class GroupResult:
    group_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'groupId' }})
    group_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'groupName' }})
    tests: Optional[List[testcaserun.TestCaseRun]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tests' }})
    
