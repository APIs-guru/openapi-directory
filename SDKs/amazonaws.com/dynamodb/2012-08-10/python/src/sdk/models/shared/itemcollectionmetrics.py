from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import attributevalue


@dataclass_json
@dataclass
class ItemCollectionMetrics:
    item_collection_key: Optional[dict[str, attributevalue.AttributeValue]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ItemCollectionKey' }})
    size_estimate_range_gb: Optional[List[float]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SizeEstimateRangeGB' }})
    
