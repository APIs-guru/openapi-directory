from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import mfaoptiontype
from . import attributetype
from . import userstatustype_enum


@dataclass_json
@dataclass
class AdminGetUserResponse:
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Enabled' }})
    mfa_options: Optional[List[mfaoptiontype.MfaOptionType]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MFAOptions' }})
    preferred_mfa_setting: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PreferredMfaSetting' }})
    user_attributes: Optional[List[attributetype.AttributeType]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UserAttributes' }})
    user_create_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UserCreateDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    user_last_modified_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UserLastModifiedDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    user_mfa_setting_list: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UserMFASettingList' }})
    user_status: Optional[userstatustype_enum.UserStatusTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UserStatus' }})
    username: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Username' }})
    
