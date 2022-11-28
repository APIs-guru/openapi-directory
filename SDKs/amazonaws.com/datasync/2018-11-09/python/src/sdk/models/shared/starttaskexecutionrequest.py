from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class StartTaskExecutionRequest:
    r"""StartTaskExecutionRequest
    StartTaskExecutionRequest
    """
    
    task_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TaskArn') }})
    excludes: Optional[List[FilterRule]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Excludes') }})
    includes: Optional[List[FilterRule]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Includes') }})
    override_options: Optional[Options] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OverrideOptions') }})
    
