from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GetItemOutput:
    r"""GetItemOutput
    Represents the output of a <code>GetItem</code> operation.
    """
    
    consumed_capacity: Optional[ConsumedCapacity] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConsumedCapacity') }})
    item: Optional[dict[str, AttributeValue]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Item') }})
    
