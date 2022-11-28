from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PutEventSelectorsRequest:
    trail_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TrailName') }})
    advanced_event_selectors: Optional[List[AdvancedEventSelector]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AdvancedEventSelectors') }})
    event_selectors: Optional[List[EventSelector]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EventSelectors') }})
    
