from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class WorkflowRunStatistics:
    failed_actions: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FailedActions' }})
    running_actions: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RunningActions' }})
    stopped_actions: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StoppedActions' }})
    succeeded_actions: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SucceededActions' }})
    timeout_actions: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TimeoutActions' }})
    total_actions: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TotalActions' }})
    
