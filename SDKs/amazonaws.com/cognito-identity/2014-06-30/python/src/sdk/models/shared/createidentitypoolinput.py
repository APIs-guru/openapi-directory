from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import cognitoidentityprovider


@dataclass_json
@dataclass
class CreateIdentityPoolInput:
    allow_classic_flow: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AllowClassicFlow' }})
    allow_unauthenticated_identities: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AllowUnauthenticatedIdentities' }})
    cognito_identity_providers: Optional[List[cognitoidentityprovider.CognitoIdentityProvider]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CognitoIdentityProviders' }})
    developer_provider_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeveloperProviderName' }})
    identity_pool_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IdentityPoolName' }})
    identity_pool_tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IdentityPoolTags' }})
    open_id_connect_provider_ar_ns: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OpenIdConnectProviderARNs' }})
    saml_provider_ar_ns: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SamlProviderARNs' }})
    supported_login_providers: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SupportedLoginProviders' }})
    
