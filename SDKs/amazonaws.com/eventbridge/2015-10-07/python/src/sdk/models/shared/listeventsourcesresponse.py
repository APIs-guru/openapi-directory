from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListEventSourcesResponse:
    event_sources: Optional[List[EventSource]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EventSources') }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
