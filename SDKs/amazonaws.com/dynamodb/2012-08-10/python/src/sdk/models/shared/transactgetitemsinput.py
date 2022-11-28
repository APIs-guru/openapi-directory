from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TransactGetItemsInput:
    transact_items: List[TransactGetItem] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TransactItems') }})
    return_consumed_capacity: Optional[ReturnConsumedCapacityEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReturnConsumedCapacity') }})
    
