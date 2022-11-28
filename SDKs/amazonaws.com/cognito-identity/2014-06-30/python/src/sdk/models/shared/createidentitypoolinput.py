from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateIdentityPoolInput:
    r"""CreateIdentityPoolInput
    Input to the CreateIdentityPool action.
    """
    
    allow_unauthenticated_identities: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AllowUnauthenticatedIdentities') }})
    identity_pool_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('IdentityPoolName') }})
    allow_classic_flow: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AllowClassicFlow') }})
    cognito_identity_providers: Optional[List[CognitoIdentityProvider]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CognitoIdentityProviders') }})
    developer_provider_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeveloperProviderName') }})
    identity_pool_tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IdentityPoolTags') }})
    open_id_connect_provider_ar_ns: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OpenIdConnectProviderARNs') }})
    saml_provider_ar_ns: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SamlProviderARNs') }})
    supported_login_providers: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SupportedLoginProviders') }})
    
