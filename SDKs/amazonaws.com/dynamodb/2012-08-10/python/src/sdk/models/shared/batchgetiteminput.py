from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BatchGetItemInput:
    r"""BatchGetItemInput
    Represents the input of a <code>BatchGetItem</code> operation.
    """
    
    request_items: dict[str, KeysAndAttributes] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RequestItems') }})
    return_consumed_capacity: Optional[ReturnConsumedCapacityEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReturnConsumedCapacity') }})
    
