from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GetPrincipalTagAttributeMapInput:
    identity_pool_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IdentityPoolId' }})
    identity_provider_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IdentityProviderName' }})
    
