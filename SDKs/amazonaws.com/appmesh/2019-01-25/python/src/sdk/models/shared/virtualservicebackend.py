from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import clientpolicy


@dataclass_json
@dataclass
class VirtualServiceBackend:
    client_policy: Optional[clientpolicy.ClientPolicy] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clientPolicy' }})
    virtual_service_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'virtualServiceName' }})
    
