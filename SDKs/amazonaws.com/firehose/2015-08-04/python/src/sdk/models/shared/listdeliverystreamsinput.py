from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import deliverystreamtype_enum


@dataclass_json
@dataclass
class ListDeliveryStreamsInput:
    delivery_stream_type: Optional[deliverystreamtype_enum.DeliveryStreamTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeliveryStreamType' }})
    exclusive_start_delivery_stream_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExclusiveStartDeliveryStreamName' }})
    limit: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Limit' }})
    
