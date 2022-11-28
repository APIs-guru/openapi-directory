from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ListTagsForDeliveryStreamInput:
    delivery_stream_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeliveryStreamName') }})
    exclusive_start_tag_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExclusiveStartTagKey') }})
    limit: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Limit') }})
    
