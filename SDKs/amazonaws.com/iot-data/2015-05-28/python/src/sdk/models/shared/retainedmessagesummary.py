from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class RetainedMessageSummary:
    last_modified_time: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastModifiedTime' }})
    payload_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'payloadSize' }})
    qos: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'qos' }})
    topic: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'topic' }})
    
