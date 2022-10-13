from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import stepconfig


@dataclass_json
@dataclass
class AddJobFlowStepsInput:
    job_flow_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'JobFlowId' }})
    steps: List[stepconfig.StepConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Steps' }})
    
