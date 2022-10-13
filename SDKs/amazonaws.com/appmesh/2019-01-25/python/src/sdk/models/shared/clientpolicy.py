from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import clientpolicytls


@dataclass_json
@dataclass
class ClientPolicy:
    tls: Optional[clientpolicytls.ClientPolicyTLS] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tls' }})
    
