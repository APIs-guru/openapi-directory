from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import synchronousjobread

class CheckConnectionReadStatusEnum(str, Enum):
    SUCCEEDED = "succeeded"
    FAILED = "failed"


@dataclass_json
@dataclass
class CheckConnectionRead:
    job_info: synchronousjobread.SynchronousJobRead = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jobInfo' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    status: CheckConnectionReadStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
