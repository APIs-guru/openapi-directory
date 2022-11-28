from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ExecutionResult:
    r"""ExecutionResult
     Specifies the end result of the flow run. 
    """
    
    bytes_processed: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bytesProcessed') }})
    bytes_written: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bytesWritten') }})
    error_info: Optional[ErrorInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorInfo') }})
    records_processed: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recordsProcessed') }})
    
