from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SearchIndexResponse:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    thing_groups: Optional[List[ThingGroupDocument]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('thingGroups') }})
    things: Optional[List[ThingDocument]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('things') }})
    
