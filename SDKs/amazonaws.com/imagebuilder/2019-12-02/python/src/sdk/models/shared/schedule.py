from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Schedule:
    r"""Schedule
    A schedule configures how often and when a pipeline will automatically create a new image.
    """
    
    pipeline_execution_start_condition: Optional[PipelineExecutionStartConditionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pipelineExecutionStartCondition') }})
    schedule_expression: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scheduleExpression') }})
    timezone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timezone') }})
    
