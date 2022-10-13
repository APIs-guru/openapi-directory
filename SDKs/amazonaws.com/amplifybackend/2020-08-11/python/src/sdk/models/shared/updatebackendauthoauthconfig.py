from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import oauthgranttype_enum
from . import oauthscopeselement_enum
from . import socialprovidersettings


@dataclass_json
@dataclass
class UpdateBackendAuthOAuthConfig:
    domain_prefix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DomainPrefix' }})
    o_auth_grant_type: Optional[oauthgranttype_enum.OAuthGrantTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OAuthGrantType' }})
    o_auth_scopes: Optional[List[oauthscopeselement_enum.OAuthScopesElementEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OAuthScopes' }})
    redirect_sign_in_ur_is: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RedirectSignInURIs' }})
    redirect_sign_out_ur_is: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RedirectSignOutURIs' }})
    social_provider_settings: Optional[socialprovidersettings.SocialProviderSettings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SocialProviderSettings' }})
    
