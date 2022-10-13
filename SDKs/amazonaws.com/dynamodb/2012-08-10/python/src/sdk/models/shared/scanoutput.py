from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import consumedcapacity
from . import attributevalue
from . import attributevalue


@dataclass_json
@dataclass
class ScanOutput:
    consumed_capacity: Optional[consumedcapacity.ConsumedCapacity] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ConsumedCapacity' }})
    count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Count' }})
    items: Optional[List[dict[str, attributevalue.AttributeValue]]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Items' }})
    last_evaluated_key: Optional[dict[str, attributevalue.AttributeValue]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastEvaluatedKey' }})
    scanned_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ScannedCount' }})
    
