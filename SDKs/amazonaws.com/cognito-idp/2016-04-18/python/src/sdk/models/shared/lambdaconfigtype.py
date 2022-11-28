from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class LambdaConfigType:
    r"""LambdaConfigType
    Specifies the configuration for Lambda triggers.
    """
    
    create_auth_challenge: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreateAuthChallenge') }})
    custom_email_sender: Optional[CustomEmailLambdaVersionConfigType] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CustomEmailSender') }})
    custom_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CustomMessage') }})
    custom_sms_sender: Optional[CustomSmsLambdaVersionConfigType] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CustomSMSSender') }})
    define_auth_challenge: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DefineAuthChallenge') }})
    kms_key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KMSKeyID') }})
    post_authentication: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PostAuthentication') }})
    post_confirmation: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PostConfirmation') }})
    pre_authentication: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PreAuthentication') }})
    pre_sign_up: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PreSignUp') }})
    pre_token_generation: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PreTokenGeneration') }})
    user_migration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserMigration') }})
    verify_auth_challenge_response: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('VerifyAuthChallengeResponse') }})
    
