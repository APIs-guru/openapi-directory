from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class HTTPHeader:
    header_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'headerName' }})
    header_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'headerValue' }})
    
