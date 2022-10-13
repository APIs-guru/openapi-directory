from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import putrecordbatchresponseentry


@dataclass_json
@dataclass
class PutRecordBatchOutput:
    encrypted: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Encrypted' }})
    failed_put_count: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FailedPutCount' }})
    request_responses: List[putrecordbatchresponseentry.PutRecordBatchResponseEntry] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RequestResponses' }})
    
