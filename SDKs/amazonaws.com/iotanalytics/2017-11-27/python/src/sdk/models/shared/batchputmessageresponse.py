from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import batchputmessageerrorentry


@dataclass_json
@dataclass
class BatchPutMessageResponse:
    batch_put_message_error_entries: Optional[List[batchputmessageerrorentry.BatchPutMessageErrorEntry]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'batchPutMessageErrorEntries' }})
    
