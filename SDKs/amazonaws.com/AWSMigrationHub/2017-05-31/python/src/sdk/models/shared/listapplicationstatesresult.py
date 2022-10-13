from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import applicationstate


@dataclass_json
@dataclass
class ListApplicationStatesResult:
    application_state_list: Optional[List[applicationstate.ApplicationState]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ApplicationStateList' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
