from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ThingIndexingConfiguration:
    r"""ThingIndexingConfiguration
    The thing indexing configuration. For more information, see <a href=\"https://docs.aws.amazon.com/iot/latest/developerguide/managing-index.html\">Managing Thing Indexing</a>.
    """
    
    thing_indexing_mode: ThingIndexingModeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('thingIndexingMode') }})
    custom_fields: Optional[List[Field]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customFields') }})
    managed_fields: Optional[List[Field]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('managedFields') }})
    thing_connectivity_indexing_mode: Optional[ThingConnectivityIndexingModeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('thingConnectivityIndexingMode') }})
    
