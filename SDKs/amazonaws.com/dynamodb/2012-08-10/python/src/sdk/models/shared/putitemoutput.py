from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import attributevalue
from . import consumedcapacity
from . import itemcollectionmetrics


@dataclass_json
@dataclass
class PutItemOutput:
    attributes: Optional[dict[str, attributevalue.AttributeValue]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Attributes' }})
    consumed_capacity: Optional[consumedcapacity.ConsumedCapacity] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ConsumedCapacity' }})
    item_collection_metrics: Optional[itemcollectionmetrics.ItemCollectionMetrics] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ItemCollectionMetrics' }})
    
