from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import consumedcapacity
from . import attributevalue


@dataclass_json
@dataclass
class GetItemOutput:
    consumed_capacity: Optional[consumedcapacity.ConsumedCapacity] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ConsumedCapacity' }})
    item: Optional[dict[str, attributevalue.AttributeValue]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Item' }})
    
