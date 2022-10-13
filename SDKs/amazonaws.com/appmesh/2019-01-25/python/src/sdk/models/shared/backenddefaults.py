from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import clientpolicy


@dataclass_json
@dataclass
class BackendDefaults:
    client_policy: Optional[clientpolicy.ClientPolicy] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clientPolicy' }})
    
