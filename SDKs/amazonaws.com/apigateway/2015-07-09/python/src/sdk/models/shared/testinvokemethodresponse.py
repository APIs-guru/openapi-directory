from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class TestInvokeMethodResponse:
    body: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'body' }})
    headers: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'headers' }})
    latency: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'latency' }})
    log: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'log' }})
    multi_value_headers: Optional[dict[str, List[str]]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'multiValueHeaders' }})
    status: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
