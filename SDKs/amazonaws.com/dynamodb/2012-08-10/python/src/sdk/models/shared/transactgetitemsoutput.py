from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import consumedcapacity
from . import itemresponse


@dataclass_json
@dataclass
class TransactGetItemsOutput:
    consumed_capacity: Optional[List[consumedcapacity.ConsumedCapacity]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ConsumedCapacity' }})
    responses: Optional[List[itemresponse.ItemResponse]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Responses' }})
    
