from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateBackendAuthUserPoolConfig:
    r"""CreateBackendAuthUserPoolConfig
    Describes the Amazon Cognito user pool configuration for the auth resource to be configured for your Amplify project.
    """
    
    required_sign_up_attributes: List[RequiredSignUpAttributesElementEnum] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RequiredSignUpAttributes') }})
    sign_in_method: SignInMethodEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SignInMethod') }})
    user_pool_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserPoolName') }})
    forgot_password: Optional[CreateBackendAuthForgotPasswordConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ForgotPassword') }})
    mfa: Optional[CreateBackendAuthMfaConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Mfa') }})
    o_auth: Optional[CreateBackendAuthOAuthConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OAuth') }})
    password_policy: Optional[CreateBackendAuthPasswordPolicyConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PasswordPolicy') }})
    
