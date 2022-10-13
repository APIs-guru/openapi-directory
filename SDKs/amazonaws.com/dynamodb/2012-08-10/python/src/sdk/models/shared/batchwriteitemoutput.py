from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import consumedcapacity
from . import itemcollectionmetrics
from . import writerequest


@dataclass_json
@dataclass
class BatchWriteItemOutput:
    consumed_capacity: Optional[List[consumedcapacity.ConsumedCapacity]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ConsumedCapacity' }})
    item_collection_metrics: Optional[dict[str, List[itemcollectionmetrics.ItemCollectionMetrics]]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ItemCollectionMetrics' }})
    unprocessed_items: Optional[dict[str, List[writerequest.WriteRequest]]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UnprocessedItems' }})
    
