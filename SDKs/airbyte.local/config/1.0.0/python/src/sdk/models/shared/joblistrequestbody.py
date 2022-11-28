from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class JobListRequestBody:
    config_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('configId') }})
    config_types: List[JobConfigTypeEnum] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('configTypes') }})
    pagination: Optional[Pagination] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pagination') }})
    
