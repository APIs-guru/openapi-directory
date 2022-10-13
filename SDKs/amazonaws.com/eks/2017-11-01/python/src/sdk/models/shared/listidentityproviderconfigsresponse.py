from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import identityproviderconfig


@dataclass_json
@dataclass
class ListIdentityProviderConfigsResponse:
    identity_provider_configs: Optional[List[identityproviderconfig.IdentityProviderConfig]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'identityProviderConfigs' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    
