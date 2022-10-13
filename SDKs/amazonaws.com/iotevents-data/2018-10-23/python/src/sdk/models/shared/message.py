from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import timestampvalue


@dataclass_json
@dataclass
class Message:
    input_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inputName' }})
    message_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'messageId' }})
    payload: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'payload' }})
    timestamp: Optional[timestampvalue.TimestampValue] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timestamp' }})
    
