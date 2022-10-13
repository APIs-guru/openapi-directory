from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class NamespacePost:
    authenticated: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authenticated' }})
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    persist_last: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'persistLast' }})
    persisted: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'persisted' }})
    push_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pushEnabled' }})
    tls_only: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tlsOnly' }})
    
