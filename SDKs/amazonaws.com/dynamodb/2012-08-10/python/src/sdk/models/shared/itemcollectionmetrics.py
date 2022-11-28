from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ItemCollectionMetrics:
    r"""ItemCollectionMetrics
    Information about item collections, if any, that were affected by the operation. <code>ItemCollectionMetrics</code> is only returned if the request asked for it. If the table does not have any local secondary indexes, this information is not returned in the response.
    """
    
    item_collection_key: Optional[dict[str, AttributeValue]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ItemCollectionKey') }})
    size_estimate_range_gb: Optional[List[float]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SizeEstimateRangeGB') }})
    
