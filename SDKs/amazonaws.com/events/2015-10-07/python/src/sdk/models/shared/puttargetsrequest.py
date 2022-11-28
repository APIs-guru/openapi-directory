from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PutTargetsRequest:
    rule: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Rule') }})
    targets: List[Target] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Targets') }})
    event_bus_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EventBusName') }})
    
