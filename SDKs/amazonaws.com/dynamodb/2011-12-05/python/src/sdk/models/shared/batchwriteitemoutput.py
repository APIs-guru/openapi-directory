from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BatchWriteItemOutput:
    r"""BatchWriteItemOutput
    A container for <code>BatchWriteItem</code> response
    """
    
    responses: Optional[dict[str, BatchWriteResponse]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Responses') }})
    unprocessed_items: Optional[dict[str, List[WriteRequest]]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UnprocessedItems') }})
    
