from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import payload


@dataclass_json
@dataclass
class FirehoseAction:
    delivery_stream_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deliveryStreamName' }})
    payload: Optional[payload.Payload] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'payload' }})
    separator: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'separator' }})
    
