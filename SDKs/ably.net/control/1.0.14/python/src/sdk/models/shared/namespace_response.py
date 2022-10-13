from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class NamespaceResponse:
    authenticated: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authenticated' }})
    created: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    modified: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'modified' }})
    persist_last: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'persistLast' }})
    persisted: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'persisted' }})
    push_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pushEnabled' }})
    tls_only: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tlsOnly' }})
    
