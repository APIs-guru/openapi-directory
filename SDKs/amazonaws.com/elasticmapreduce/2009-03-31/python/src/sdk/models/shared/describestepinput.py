from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DescribeStepInput:
    cluster_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ClusterId' }})
    step_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StepId' }})
    
