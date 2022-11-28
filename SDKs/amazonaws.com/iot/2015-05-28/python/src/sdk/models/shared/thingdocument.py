from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ThingDocument:
    r"""ThingDocument
    The thing search index document.
    """
    
    attributes: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attributes') }})
    connectivity: Optional[ThingConnectivity] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('connectivity') }})
    shadow: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shadow') }})
    thing_group_names: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('thingGroupNames') }})
    thing_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('thingId') }})
    thing_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('thingName') }})
    thing_type_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('thingTypeName') }})
    
