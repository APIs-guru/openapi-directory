from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TransactGetItemsOutput:
    consumed_capacity: Optional[List[ConsumedCapacity]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConsumedCapacity') }})
    responses: Optional[List[ItemResponse]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Responses') }})
    
