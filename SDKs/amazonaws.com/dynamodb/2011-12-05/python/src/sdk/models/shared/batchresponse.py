from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import attributevalue


@dataclass_json
@dataclass
class BatchResponse:
    consumed_capacity_units: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ConsumedCapacityUnits' }})
    items: Optional[List[dict[str, attributevalue.AttributeValue]]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Items' }})
    
