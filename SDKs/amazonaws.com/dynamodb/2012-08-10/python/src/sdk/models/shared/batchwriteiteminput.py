from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BatchWriteItemInput:
    r"""BatchWriteItemInput
    Represents the input of a <code>BatchWriteItem</code> operation.
    """
    
    request_items: dict[str, List[WriteRequest]] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RequestItems') }})
    return_consumed_capacity: Optional[ReturnConsumedCapacityEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReturnConsumedCapacity') }})
    return_item_collection_metrics: Optional[ReturnItemCollectionMetricsEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReturnItemCollectionMetrics') }})
    
