from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ListNamedShadowsForThingResponse:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    results: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('results') }})
    timestamp: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timestamp') }})
    
