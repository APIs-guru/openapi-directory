from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import attributevalue
from . import key


@dataclass_json
@dataclass
class QueryOutput:
    consumed_capacity_units: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ConsumedCapacityUnits' }})
    count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Count' }})
    items: Optional[List[dict[str, attributevalue.AttributeValue]]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Items' }})
    last_evaluated_key: Optional[key.Key] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastEvaluatedKey' }})
    
