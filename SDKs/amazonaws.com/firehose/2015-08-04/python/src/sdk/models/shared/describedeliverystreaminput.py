from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DescribeDeliveryStreamInput:
    delivery_stream_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeliveryStreamName') }})
    exclusive_start_destination_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExclusiveStartDestinationId') }})
    limit: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Limit') }})
    
