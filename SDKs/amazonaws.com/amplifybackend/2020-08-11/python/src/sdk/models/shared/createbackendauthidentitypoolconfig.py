from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CreateBackendAuthIdentityPoolConfig:
    identity_pool_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IdentityPoolName' }})
    unauthenticated_login: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UnauthenticatedLogin' }})
    
