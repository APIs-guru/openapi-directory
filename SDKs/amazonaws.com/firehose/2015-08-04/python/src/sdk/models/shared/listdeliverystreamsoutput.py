from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ListDeliveryStreamsOutput:
    delivery_stream_names: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeliveryStreamNames' }})
    has_more_delivery_streams: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HasMoreDeliveryStreams' }})
    
