from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateBackendAuthOAuthConfig:
    r"""CreateBackendAuthOAuthConfig
    Creates the OAuth configuration for your Amplify project.
    """
    
    o_auth_grant_type: OAuthGrantTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('OAuthGrantType') }})
    o_auth_scopes: List[OAuthScopesElementEnum] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('OAuthScopes') }})
    redirect_sign_in_ur_is: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RedirectSignInURIs') }})
    redirect_sign_out_ur_is: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RedirectSignOutURIs') }})
    domain_prefix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DomainPrefix') }})
    social_provider_settings: Optional[SocialProviderSettings] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SocialProviderSettings') }})
    
