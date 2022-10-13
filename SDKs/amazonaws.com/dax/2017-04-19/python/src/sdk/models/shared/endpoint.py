from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Endpoint:
    address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Address' }})
    port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Port' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'URL' }})
    
