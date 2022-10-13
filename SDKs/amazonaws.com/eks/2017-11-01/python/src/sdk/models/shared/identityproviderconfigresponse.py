from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import oidcidentityproviderconfig


@dataclass_json
@dataclass
class IdentityProviderConfigResponse:
    oidc: Optional[oidcidentityproviderconfig.OidcIdentityProviderConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'oidc' }})
    
