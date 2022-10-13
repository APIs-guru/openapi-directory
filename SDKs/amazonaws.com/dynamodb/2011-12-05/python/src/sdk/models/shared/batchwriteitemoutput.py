from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import batchwriteresponse
from . import writerequest


@dataclass_json
@dataclass
class BatchWriteItemOutput:
    responses: Optional[dict[str, batchwriteresponse.BatchWriteResponse]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Responses' }})
    unprocessed_items: Optional[dict[str, List[writerequest.WriteRequest]]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UnprocessedItems' }})
    
