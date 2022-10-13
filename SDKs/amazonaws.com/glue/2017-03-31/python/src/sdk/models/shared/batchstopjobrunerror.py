from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import errordetail


@dataclass_json
@dataclass
class BatchStopJobRunError:
    error_detail: Optional[errordetail.ErrorDetail] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ErrorDetail' }})
    job_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'JobName' }})
    job_run_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'JobRunId' }})
    
