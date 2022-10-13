from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import batchwriteoperationresponse


@dataclass_json
@dataclass
class BatchWriteResponse:
    responses: Optional[List[batchwriteoperationresponse.BatchWriteOperationResponse]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Responses' }})
    
