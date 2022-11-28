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
class UpdateUserPoolRequest:
    r"""UpdateUserPoolRequest
    Represents the request to update the user pool.
    """
    
    user_pool_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserPoolId') }})
    account_recovery_setting: Optional[AccountRecoverySettingType] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AccountRecoverySetting') }})
    admin_create_user_config: Optional[AdminCreateUserConfigType] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AdminCreateUserConfig') }})
    auto_verified_attributes: Optional[List[VerifiedAttributeTypeEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AutoVerifiedAttributes') }})
    device_configuration: Optional[DeviceConfigurationType] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeviceConfiguration') }})
    email_configuration: Optional[EmailConfigurationType] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EmailConfiguration') }})
    email_verification_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EmailVerificationMessage') }})
    email_verification_subject: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EmailVerificationSubject') }})
    lambda_config: Optional[LambdaConfigType] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LambdaConfig') }})
    mfa_configuration: Optional[UserPoolMfaTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MfaConfiguration') }})
    policies: Optional[UserPoolPolicyType] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Policies') }})
    sms_authentication_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SmsAuthenticationMessage') }})
    sms_configuration: Optional[SmsConfigurationType] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SmsConfiguration') }})
    sms_verification_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SmsVerificationMessage') }})
    user_pool_add_ons: Optional[UserPoolAddOnsType] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserPoolAddOns') }})
    user_pool_tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserPoolTags') }})
    verification_message_template: Optional[VerificationMessageTemplateType] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('VerificationMessageTemplate') }})
    
