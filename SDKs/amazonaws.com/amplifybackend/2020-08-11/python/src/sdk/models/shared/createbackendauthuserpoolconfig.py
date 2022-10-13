from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import createbackendauthforgotpasswordconfig
from . import createbackendauthmfaconfig
from . import createbackendauthoauthconfig
from . import createbackendauthpasswordpolicyconfig
from . import requiredsignupattributeselement_enum
from . import signinmethod_enum


@dataclass_json
@dataclass
class CreateBackendAuthUserPoolConfig:
    forgot_password: Optional[createbackendauthforgotpasswordconfig.CreateBackendAuthForgotPasswordConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ForgotPassword' }})
    mfa: Optional[createbackendauthmfaconfig.CreateBackendAuthMfaConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Mfa' }})
    o_auth: Optional[createbackendauthoauthconfig.CreateBackendAuthOAuthConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OAuth' }})
    password_policy: Optional[createbackendauthpasswordpolicyconfig.CreateBackendAuthPasswordPolicyConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PasswordPolicy' }})
    required_sign_up_attributes: List[requiredsignupattributeselement_enum.RequiredSignUpAttributesElementEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RequiredSignUpAttributes' }})
    sign_in_method: signinmethod_enum.SignInMethodEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SignInMethod' }})
    user_pool_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UserPoolName' }})
    
