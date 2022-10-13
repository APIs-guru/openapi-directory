from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Websocket:
    connection_expiry: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ConnectionExpiry' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Url' }})
    
