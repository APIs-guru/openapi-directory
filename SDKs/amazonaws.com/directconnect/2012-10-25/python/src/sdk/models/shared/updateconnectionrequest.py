from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class UpdateConnectionRequest:
    connection_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'connectionId' }})
    connection_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'connectionName' }})
    encryption_mode: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'encryptionMode' }})
    
