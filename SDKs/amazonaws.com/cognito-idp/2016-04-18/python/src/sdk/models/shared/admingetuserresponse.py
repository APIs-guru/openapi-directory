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
class AdminGetUserResponse:
    r"""AdminGetUserResponse
    Represents the response from the server from the request to get the specified user as an administrator.
    """
    
    username: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Username') }})
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Enabled') }})
    mfa_options: Optional[List[MfaOptionType]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MFAOptions') }})
    preferred_mfa_setting: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PreferredMfaSetting') }})
    user_attributes: Optional[List[AttributeType]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserAttributes') }})
    user_create_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserCreateDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    user_last_modified_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserLastModifiedDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    user_mfa_setting_list: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserMFASettingList') }})
    user_status: Optional[UserStatusTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserStatus') }})
    
