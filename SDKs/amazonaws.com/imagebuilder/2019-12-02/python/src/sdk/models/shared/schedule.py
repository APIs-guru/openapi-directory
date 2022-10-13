from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import pipelineexecutionstartcondition_enum


@dataclass_json
@dataclass
class Schedule:
    pipeline_execution_start_condition: Optional[pipelineexecutionstartcondition_enum.PipelineExecutionStartConditionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pipelineExecutionStartCondition' }})
    schedule_expression: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scheduleExpression' }})
    timezone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timezone' }})
    
