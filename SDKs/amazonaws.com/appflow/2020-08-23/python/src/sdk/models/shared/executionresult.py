from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import errorinfo


@dataclass_json
@dataclass
class ExecutionResult:
    bytes_processed: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bytesProcessed' }})
    bytes_written: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bytesWritten' }})
    error_info: Optional[errorinfo.ErrorInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errorInfo' }})
    records_processed: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'recordsProcessed' }})
    
