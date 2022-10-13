from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import stepexecutionstatusdetail
from . import stepconfig


@dataclass_json
@dataclass
class StepDetail:
    execution_status_detail: stepexecutionstatusdetail.StepExecutionStatusDetail = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExecutionStatusDetail' }})
    step_config: stepconfig.StepConfig = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StepConfig' }})
    
