from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import accountrecoverysettingtype
from . import admincreateuserconfigtype
from . import aliasattributetype_enum
from . import verifiedattributetype_enum
from . import deviceconfigurationtype
from . import emailconfigurationtype
from . import lambdaconfigtype
from . import userpoolmfatype_enum
from . import userpoolpolicytype
from . import schemaattributetype
from . import smsconfigurationtype
from . import statustype_enum
from . import userpooladdonstype
from . import usernameattributetype_enum
from . import usernameconfigurationtype
from . import verificationmessagetemplatetype


@dataclass_json
@dataclass
class UserPoolType:
    account_recovery_setting: Optional[accountrecoverysettingtype.AccountRecoverySettingType] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AccountRecoverySetting' }})
    admin_create_user_config: Optional[admincreateuserconfigtype.AdminCreateUserConfigType] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AdminCreateUserConfig' }})
    alias_attributes: Optional[List[aliasattributetype_enum.AliasAttributeTypeEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AliasAttributes' }})
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Arn' }})
    auto_verified_attributes: Optional[List[verifiedattributetype_enum.VerifiedAttributeTypeEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AutoVerifiedAttributes' }})
    creation_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreationDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    custom_domain: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CustomDomain' }})
    device_configuration: Optional[deviceconfigurationtype.DeviceConfigurationType] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeviceConfiguration' }})
    domain: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Domain' }})
    email_configuration: Optional[emailconfigurationtype.EmailConfigurationType] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EmailConfiguration' }})
    email_configuration_failure: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EmailConfigurationFailure' }})
    email_verification_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EmailVerificationMessage' }})
    email_verification_subject: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EmailVerificationSubject' }})
    estimated_number_of_users: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EstimatedNumberOfUsers' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Id' }})
    lambda_config: Optional[lambdaconfigtype.LambdaConfigType] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LambdaConfig' }})
    last_modified_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastModifiedDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    mfa_configuration: Optional[userpoolmfatype_enum.UserPoolMfaTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MfaConfiguration' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    policies: Optional[userpoolpolicytype.UserPoolPolicyType] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Policies' }})
    schema_attributes: Optional[List[schemaattributetype.SchemaAttributeType]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SchemaAttributes' }})
    sms_authentication_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SmsAuthenticationMessage' }})
    sms_configuration: Optional[smsconfigurationtype.SmsConfigurationType] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SmsConfiguration' }})
    sms_configuration_failure: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SmsConfigurationFailure' }})
    sms_verification_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SmsVerificationMessage' }})
    status: Optional[statustype_enum.StatusTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    user_pool_add_ons: Optional[userpooladdonstype.UserPoolAddOnsType] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UserPoolAddOns' }})
    user_pool_tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UserPoolTags' }})
    username_attributes: Optional[List[usernameattributetype_enum.UsernameAttributeTypeEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UsernameAttributes' }})
    username_configuration: Optional[usernameconfigurationtype.UsernameConfigurationType] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UsernameConfiguration' }})
    verification_message_template: Optional[verificationmessagetemplatetype.VerificationMessageTemplateType] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VerificationMessageTemplate' }})
    
