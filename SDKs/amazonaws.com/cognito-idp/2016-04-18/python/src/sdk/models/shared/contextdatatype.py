from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import httpheader


@dataclass_json
@dataclass
class ContextDataType:
    encoded_data: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EncodedData' }})
    http_headers: List[httpheader.HTTPHeader] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HttpHeaders' }})
    ip_address: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IpAddress' }})
    server_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ServerName' }})
    server_path: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ServerPath' }})
    
