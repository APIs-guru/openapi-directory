from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DescribeDeliveryStreamInput:
    delivery_stream_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeliveryStreamName' }})
    exclusive_start_destination_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExclusiveStartDestinationId' }})
    limit: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Limit' }})
    
