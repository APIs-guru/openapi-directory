from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TransactWriteItemsInput:
    transact_items: List[TransactWriteItem] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TransactItems') }})
    client_request_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClientRequestToken') }})
    return_consumed_capacity: Optional[ReturnConsumedCapacityEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReturnConsumedCapacity') }})
    return_item_collection_metrics: Optional[ReturnItemCollectionMetricsEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReturnItemCollectionMetrics') }})
    
