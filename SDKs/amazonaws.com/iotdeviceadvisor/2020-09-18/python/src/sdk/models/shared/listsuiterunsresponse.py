from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import suiteruninformation


@dataclass_json
@dataclass
class ListSuiteRunsResponse:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    suite_runs_list: Optional[List[suiteruninformation.SuiteRunInformation]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'suiteRunsList' }})
    
