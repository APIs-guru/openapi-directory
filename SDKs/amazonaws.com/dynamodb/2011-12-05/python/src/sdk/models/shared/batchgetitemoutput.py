from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import batchresponse
from . import keysandattributes


@dataclass_json
@dataclass
class BatchGetItemOutput:
    responses: Optional[dict[str, batchresponse.BatchResponse]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Responses' }})
    unprocessed_keys: Optional[dict[str, keysandattributes.KeysAndAttributes]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UnprocessedKeys' }})
    
