from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CancelTaskExecutionRequest:
    task_execution_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TaskExecutionArn' }})
    
