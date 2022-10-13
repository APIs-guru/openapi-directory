from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import step


@dataclass_json
@dataclass
class DescribeStepOutput:
    step: Optional[step.Step] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Step' }})
    
