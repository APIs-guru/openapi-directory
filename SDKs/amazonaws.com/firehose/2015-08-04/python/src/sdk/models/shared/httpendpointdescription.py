from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class HTTPEndpointDescription:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Url' }})
    
