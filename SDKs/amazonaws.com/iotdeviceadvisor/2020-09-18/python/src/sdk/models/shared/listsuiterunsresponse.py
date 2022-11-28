from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListSuiteRunsResponse:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    suite_runs_list: Optional[List[SuiteRunInformation]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('suiteRunsList') }})
    
