from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import audittaskstatus_enum
from . import audittasktype_enum


@dataclass_json
@dataclass
class AuditTaskMetadata:
    task_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'taskId' }})
    task_status: Optional[audittaskstatus_enum.AuditTaskStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'taskStatus' }})
    task_type: Optional[audittasktype_enum.AuditTaskTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'taskType' }})
    
