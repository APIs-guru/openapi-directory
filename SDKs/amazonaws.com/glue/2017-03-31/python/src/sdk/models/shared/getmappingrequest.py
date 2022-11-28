from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GetMappingRequest:
    source: CatalogEntry = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Source') }})
    location: Optional[Location] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Location') }})
    sinks: Optional[List[CatalogEntry]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Sinks') }})
    
