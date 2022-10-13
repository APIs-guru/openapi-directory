from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import identityproviderconfigresponse


@dataclass_json
@dataclass
class DescribeIdentityProviderConfigResponse:
    identity_provider_config: Optional[identityproviderconfigresponse.IdentityProviderConfigResponse] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'identityProviderConfig' }})
    
