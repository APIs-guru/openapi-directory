from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class QueryOutput:
    consumed_capacity_units: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConsumedCapacityUnits') }})
    count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Count') }})
    items: Optional[List[dict[str, AttributeValue]]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Items') }})
    last_evaluated_key: Optional[Key] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastEvaluatedKey') }})
    
