from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import trigger


@dataclass_json
@dataclass
class GetTriggersResponse:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    triggers: Optional[List[trigger.Trigger]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Triggers' }})
    
