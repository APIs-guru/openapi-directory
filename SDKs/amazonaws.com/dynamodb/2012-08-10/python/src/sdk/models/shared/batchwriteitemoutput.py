from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BatchWriteItemOutput:
    r"""BatchWriteItemOutput
    Represents the output of a <code>BatchWriteItem</code> operation.
    """
    
    consumed_capacity: Optional[List[ConsumedCapacity]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConsumedCapacity') }})
    item_collection_metrics: Optional[dict[str, List[ItemCollectionMetrics]]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ItemCollectionMetrics') }})
    unprocessed_items: Optional[dict[str, List[WriteRequest]]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UnprocessedItems') }})
    
