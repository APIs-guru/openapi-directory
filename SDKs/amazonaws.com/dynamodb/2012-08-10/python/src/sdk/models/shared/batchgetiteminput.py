from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import keysandattributes
from . import returnconsumedcapacity_enum


@dataclass_json
@dataclass
class BatchGetItemInput:
    request_items: dict[str, keysandattributes.KeysAndAttributes] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RequestItems' }})
    return_consumed_capacity: Optional[returnconsumedcapacity_enum.ReturnConsumedCapacityEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReturnConsumedCapacity' }})
    
