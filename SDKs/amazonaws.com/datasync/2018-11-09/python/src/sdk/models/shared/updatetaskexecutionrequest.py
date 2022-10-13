from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import options


@dataclass_json
@dataclass
class UpdateTaskExecutionRequest:
    options: options.Options = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Options' }})
    task_execution_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TaskExecutionArn' }})
    
