from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import writerequest


@dataclass_json
@dataclass
class BatchWriteItemInput:
    request_items: dict[str, List[writerequest.WriteRequest]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RequestItems' }})
    
