from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ReportTaskProgressInput:
    r"""ReportTaskProgressInput
    Contains the parameters for ReportTaskProgress.
    """
    
    task_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('taskId') }})
    fields: Optional[List[Field]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fields') }})
    
