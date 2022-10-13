from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DeliverConfigSnapshotRequest:
    delivery_channel_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deliveryChannelName' }})
    
