from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListStudiosOutput:
    marker: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Marker') }})
    studios: Optional[List[StudioSummary]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Studios') }})
    
