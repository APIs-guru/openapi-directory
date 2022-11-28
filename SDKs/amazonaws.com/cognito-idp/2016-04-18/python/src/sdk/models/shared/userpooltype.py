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
class UserPoolType:
    r"""UserPoolType
    A container for information about the user pool.
    """
    
    account_recovery_setting: Optional[AccountRecoverySettingType] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AccountRecoverySetting') }})
    admin_create_user_config: Optional[AdminCreateUserConfigType] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AdminCreateUserConfig') }})
    alias_attributes: Optional[List[AliasAttributeTypeEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AliasAttributes') }})
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Arn') }})
    auto_verified_attributes: Optional[List[VerifiedAttributeTypeEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AutoVerifiedAttributes') }})
    creation_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreationDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    custom_domain: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CustomDomain') }})
    device_configuration: Optional[DeviceConfigurationType] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeviceConfiguration') }})
    domain: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Domain') }})
    email_configuration: Optional[EmailConfigurationType] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EmailConfiguration') }})
    email_configuration_failure: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EmailConfigurationFailure') }})
    email_verification_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EmailVerificationMessage') }})
    email_verification_subject: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EmailVerificationSubject') }})
    estimated_number_of_users: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EstimatedNumberOfUsers') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Id') }})
    lambda_config: Optional[LambdaConfigType] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LambdaConfig') }})
    last_modified_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastModifiedDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    mfa_configuration: Optional[UserPoolMfaTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MfaConfiguration') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    policies: Optional[UserPoolPolicyType] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Policies') }})
    schema_attributes: Optional[List[SchemaAttributeType]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SchemaAttributes') }})
    sms_authentication_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SmsAuthenticationMessage') }})
    sms_configuration: Optional[SmsConfigurationType] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SmsConfiguration') }})
    sms_configuration_failure: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SmsConfigurationFailure') }})
    sms_verification_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SmsVerificationMessage') }})
    status: Optional[StatusTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    user_pool_add_ons: Optional[UserPoolAddOnsType] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserPoolAddOns') }})
    user_pool_tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserPoolTags') }})
    username_attributes: Optional[List[UsernameAttributeTypeEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UsernameAttributes') }})
    username_configuration: Optional[UsernameConfigurationType] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UsernameConfiguration') }})
    verification_message_template: Optional[VerificationMessageTemplateType] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('VerificationMessageTemplate') }})
    
