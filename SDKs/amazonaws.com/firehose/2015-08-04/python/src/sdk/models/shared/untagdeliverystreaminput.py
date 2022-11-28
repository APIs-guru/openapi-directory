from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class UntagDeliveryStreamInput:
    delivery_stream_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeliveryStreamName') }})
    tag_keys: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TagKeys') }})
    
