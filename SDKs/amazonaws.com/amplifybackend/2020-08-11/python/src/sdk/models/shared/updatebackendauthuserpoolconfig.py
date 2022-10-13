from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import updatebackendauthforgotpasswordconfig
from . import updatebackendauthmfaconfig
from . import updatebackendauthoauthconfig
from . import updatebackendauthpasswordpolicyconfig


@dataclass_json
@dataclass
class UpdateBackendAuthUserPoolConfig:
    forgot_password: Optional[updatebackendauthforgotpasswordconfig.UpdateBackendAuthForgotPasswordConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ForgotPassword' }})
    mfa: Optional[updatebackendauthmfaconfig.UpdateBackendAuthMfaConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Mfa' }})
    o_auth: Optional[updatebackendauthoauthconfig.UpdateBackendAuthOAuthConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OAuth' }})
    password_policy: Optional[updatebackendauthpasswordpolicyconfig.UpdateBackendAuthPasswordPolicyConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PasswordPolicy' }})
    
