from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BatchReadOperationResponse:
    r"""BatchReadOperationResponse
    Represents the output of a <code>BatchRead</code> response operation.
    """
    
    exception_response: Optional[BatchReadException] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExceptionResponse') }})
    successful_response: Optional[BatchReadSuccessfulResponse] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SuccessfulResponse') }})
    
