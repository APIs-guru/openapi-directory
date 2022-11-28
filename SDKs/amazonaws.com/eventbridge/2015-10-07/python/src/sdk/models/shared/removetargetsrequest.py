from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class RemoveTargetsRequest:
    ids: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Ids') }})
    rule: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Rule') }})
    event_bus_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EventBusName') }})
    force: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Force') }})
    
