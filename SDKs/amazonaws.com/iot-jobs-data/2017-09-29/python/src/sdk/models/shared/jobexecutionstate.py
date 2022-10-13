from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import jobexecutionstatus_enum


@dataclass_json
@dataclass
class JobExecutionState:
    status: Optional[jobexecutionstatus_enum.JobExecutionStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    status_details: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'statusDetails' }})
    version_number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'versionNumber' }})
    
