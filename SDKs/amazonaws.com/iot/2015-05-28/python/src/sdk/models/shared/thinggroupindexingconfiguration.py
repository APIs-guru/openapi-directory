from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ThingGroupIndexingConfiguration:
    r"""ThingGroupIndexingConfiguration
    Thing group indexing configuration.
    """
    
    thing_group_indexing_mode: ThingGroupIndexingModeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('thingGroupIndexingMode') }})
    custom_fields: Optional[List[Field]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customFields') }})
    managed_fields: Optional[List[Field]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('managedFields') }})
    
