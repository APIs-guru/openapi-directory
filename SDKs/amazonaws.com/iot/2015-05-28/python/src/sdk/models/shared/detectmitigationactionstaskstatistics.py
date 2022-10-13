from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DetectMitigationActionsTaskStatistics:
    actions_executed: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'actionsExecuted' }})
    actions_failed: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'actionsFailed' }})
    actions_skipped: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'actionsSkipped' }})
    
