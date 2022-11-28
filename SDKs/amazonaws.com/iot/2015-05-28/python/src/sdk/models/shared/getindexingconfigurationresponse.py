from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GetIndexingConfigurationResponse:
    thing_group_indexing_configuration: Optional[ThingGroupIndexingConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('thingGroupIndexingConfiguration') }})
    thing_indexing_configuration: Optional[ThingIndexingConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('thingIndexingConfiguration') }})
    
