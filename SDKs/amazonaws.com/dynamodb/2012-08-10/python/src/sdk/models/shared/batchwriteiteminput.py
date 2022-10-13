from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import writerequest
from . import returnconsumedcapacity_enum
from . import returnitemcollectionmetrics_enum


@dataclass_json
@dataclass
class BatchWriteItemInput:
    request_items: dict[str, List[writerequest.WriteRequest]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RequestItems' }})
    return_consumed_capacity: Optional[returnconsumedcapacity_enum.ReturnConsumedCapacityEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReturnConsumedCapacity' }})
    return_item_collection_metrics: Optional[returnitemcollectionmetrics_enum.ReturnItemCollectionMetricsEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReturnItemCollectionMetrics' }})
    
