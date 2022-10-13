from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class HTTPEndpointConfiguration:
    access_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AccessKey' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Url' }})
    
