from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ListTagsForDeliveryStreamInput:
    delivery_stream_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeliveryStreamName' }})
    exclusive_start_tag_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExclusiveStartTagKey' }})
    limit: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Limit' }})
    
