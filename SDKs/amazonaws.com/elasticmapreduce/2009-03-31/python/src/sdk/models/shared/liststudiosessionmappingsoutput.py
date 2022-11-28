from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListStudioSessionMappingsOutput:
    marker: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Marker') }})
    session_mappings: Optional[List[SessionMappingSummary]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SessionMappings') }})
    
