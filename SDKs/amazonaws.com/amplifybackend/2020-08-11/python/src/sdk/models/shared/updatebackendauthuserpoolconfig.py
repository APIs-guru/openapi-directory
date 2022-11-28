from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class UpdateBackendAuthUserPoolConfig:
    r"""UpdateBackendAuthUserPoolConfig
    Describes the Amazon Cognito user pool configuration for the authorization resource to be configured for your Amplify project on an update.
    """
    
    forgot_password: Optional[UpdateBackendAuthForgotPasswordConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ForgotPassword') }})
    mfa: Optional[UpdateBackendAuthMfaConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Mfa') }})
    o_auth: Optional[UpdateBackendAuthOAuthConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OAuth') }})
    password_policy: Optional[UpdateBackendAuthPasswordPolicyConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PasswordPolicy') }})
    
