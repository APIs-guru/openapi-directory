from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BatchGetItemOutput:
    r"""BatchGetItemOutput
    Represents the output of a <code>BatchGetItem</code> operation.
    """
    
    consumed_capacity: Optional[List[ConsumedCapacity]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConsumedCapacity') }})
    responses: Optional[dict[str, List[dict[str, AttributeValue]]]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Responses') }})
    unprocessed_keys: Optional[dict[str, KeysAndAttributes]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UnprocessedKeys') }})
    
