from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import repositorytriggerexecutionfailure


@dataclass_json
@dataclass
class TestRepositoryTriggersOutput:
    failed_executions: Optional[List[repositorytriggerexecutionfailure.RepositoryTriggerExecutionFailure]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'failedExecutions' }})
    successful_executions: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'successfulExecutions' }})
    
