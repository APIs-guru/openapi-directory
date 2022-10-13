from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import batchreadexception
from . import batchreadsuccessfulresponse


@dataclass_json
@dataclass
class BatchReadOperationResponse:
    exception_response: Optional[batchreadexception.BatchReadException] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExceptionResponse' }})
    successful_response: Optional[batchreadsuccessfulresponse.BatchReadSuccessfulResponse] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SuccessfulResponse' }})
    
