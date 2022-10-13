from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import returnconsumedcapacity_enum
from . import transactgetitem


@dataclass_json
@dataclass
class TransactGetItemsInput:
    return_consumed_capacity: Optional[returnconsumedcapacity_enum.ReturnConsumedCapacityEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReturnConsumedCapacity' }})
    transact_items: List[transactgetitem.TransactGetItem] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TransactItems' }})
    
