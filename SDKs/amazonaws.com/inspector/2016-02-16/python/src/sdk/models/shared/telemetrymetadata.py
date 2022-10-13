from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class TelemetryMetadata:
    count: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'count' }})
    data_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataSize' }})
    message_type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'messageType' }})
    
