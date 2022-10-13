from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import attributetype
from . import mfaoptiontype
from . import userstatustype_enum


@dataclass_json
@dataclass
class UserType:
    attributes: Optional[List[attributetype.AttributeType]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Attributes' }})
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Enabled' }})
    mfa_options: Optional[List[mfaoptiontype.MfaOptionType]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MFAOptions' }})
    user_create_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UserCreateDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    user_last_modified_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UserLastModifiedDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    user_status: Optional[userstatustype_enum.UserStatusTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UserStatus' }})
    username: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Username' }})
    
