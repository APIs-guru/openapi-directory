from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ListRulesRequest:
    event_bus_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EventBusName') }})
    limit: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Limit') }})
    name_prefix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NamePrefix') }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
