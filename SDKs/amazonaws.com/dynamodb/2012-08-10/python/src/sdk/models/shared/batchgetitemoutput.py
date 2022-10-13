from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import consumedcapacity
from . import attributevalue
from . import keysandattributes


@dataclass_json
@dataclass
class BatchGetItemOutput:
    consumed_capacity: Optional[List[consumedcapacity.ConsumedCapacity]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ConsumedCapacity' }})
    responses: Optional[dict[str, List[dict[str, attributevalue.AttributeValue]]]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Responses' }})
    unprocessed_keys: Optional[dict[str, keysandattributes.KeysAndAttributes]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UnprocessedKeys' }})
    
