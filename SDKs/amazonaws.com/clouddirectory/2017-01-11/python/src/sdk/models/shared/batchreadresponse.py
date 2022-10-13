from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import batchreadoperationresponse


@dataclass_json
@dataclass
class BatchReadResponse:
    responses: Optional[List[batchreadoperationresponse.BatchReadOperationResponse]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Responses' }})
    
