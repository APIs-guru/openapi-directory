from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Session:
    session_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sessionId' }})
    stream_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'streamUrl' }})
    token_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tokenValue' }})
    
