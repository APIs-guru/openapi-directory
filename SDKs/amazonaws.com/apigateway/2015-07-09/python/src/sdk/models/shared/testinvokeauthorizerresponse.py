from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class TestInvokeAuthorizerResponse:
    authorization: Optional[dict[str, List[str]]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authorization' }})
    claims: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'claims' }})
    client_status: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clientStatus' }})
    latency: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'latency' }})
    log: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'log' }})
    policy: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'policy' }})
    principal_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'principalId' }})
    
