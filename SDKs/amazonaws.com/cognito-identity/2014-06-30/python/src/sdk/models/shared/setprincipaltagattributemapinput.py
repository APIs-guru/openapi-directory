from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class SetPrincipalTagAttributeMapInput:
    identity_pool_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IdentityPoolId' }})
    identity_provider_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IdentityProviderName' }})
    principal_tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PrincipalTags' }})
    use_defaults: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UseDefaults' }})
    
