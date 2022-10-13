from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import identityprovidertype


@dataclass_json
@dataclass
class CreateIdentityProviderResponse:
    identity_provider: identityprovidertype.IdentityProviderType = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IdentityProvider' }})
    
