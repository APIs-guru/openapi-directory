from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import detectmitigationactionstasksummary


@dataclass_json
@dataclass
class DescribeDetectMitigationActionsTaskResponse:
    task_summary: Optional[detectmitigationactionstasksummary.DetectMitigationActionsTaskSummary] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'taskSummary' }})
    
