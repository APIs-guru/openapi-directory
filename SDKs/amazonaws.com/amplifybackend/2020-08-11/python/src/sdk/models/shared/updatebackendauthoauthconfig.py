from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class UpdateBackendAuthOAuthConfig:
    r"""UpdateBackendAuthOAuthConfig
    The OAuth configurations for authenticating users into your Amplify app.
    """
    
    domain_prefix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DomainPrefix') }})
    o_auth_grant_type: Optional[OAuthGrantTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OAuthGrantType') }})
    o_auth_scopes: Optional[List[OAuthScopesElementEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OAuthScopes') }})
    redirect_sign_in_ur_is: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RedirectSignInURIs') }})
    redirect_sign_out_ur_is: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RedirectSignOutURIs') }})
    social_provider_settings: Optional[SocialProviderSettings] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SocialProviderSettings') }})
    
