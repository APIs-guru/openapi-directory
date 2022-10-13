from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class StepFunctionsAction:
    execution_name_prefix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'executionNamePrefix' }})
    role_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'roleArn' }})
    state_machine_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stateMachineName' }})
    
