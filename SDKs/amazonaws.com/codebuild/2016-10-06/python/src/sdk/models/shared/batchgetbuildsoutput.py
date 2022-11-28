from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BatchGetBuildsOutput:
    builds: Optional[List[Build]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('builds') }})
    builds_not_found: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('buildsNotFound') }})
    
