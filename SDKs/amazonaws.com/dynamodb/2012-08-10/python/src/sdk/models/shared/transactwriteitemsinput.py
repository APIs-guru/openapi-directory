from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import returnconsumedcapacity_enum
from . import returnitemcollectionmetrics_enum
from . import transactwriteitem


@dataclass_json
@dataclass
class TransactWriteItemsInput:
    client_request_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ClientRequestToken' }})
    return_consumed_capacity: Optional[returnconsumedcapacity_enum.ReturnConsumedCapacityEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReturnConsumedCapacity' }})
    return_item_collection_metrics: Optional[returnitemcollectionmetrics_enum.ReturnItemCollectionMetricsEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReturnItemCollectionMetrics' }})
    transact_items: List[transactwriteitem.TransactWriteItem] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TransactItems' }})
    
