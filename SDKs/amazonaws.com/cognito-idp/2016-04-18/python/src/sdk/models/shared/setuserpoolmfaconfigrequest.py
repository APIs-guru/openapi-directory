from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import userpoolmfatype_enum
from . import smsmfaconfigtype
from . import softwaretokenmfaconfigtype


@dataclass_json
@dataclass
class SetUserPoolMfaConfigRequest:
    mfa_configuration: Optional[userpoolmfatype_enum.UserPoolMfaTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MfaConfiguration' }})
    sms_mfa_configuration: Optional[smsmfaconfigtype.SmsMfaConfigType] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SmsMfaConfiguration' }})
    software_token_mfa_configuration: Optional[softwaretokenmfaconfigtype.SoftwareTokenMfaConfigType] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SoftwareTokenMfaConfiguration' }})
    user_pool_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UserPoolId' }})
    
