from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import clientauthenticationstatus_enum
from . import clientauthenticationtype_enum


@dataclass_json
@dataclass
class ClientAuthenticationSettingInfo:
    last_updated_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastUpdatedDateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    status: Optional[clientauthenticationstatus_enum.ClientAuthenticationStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    type: Optional[clientauthenticationtype_enum.ClientAuthenticationTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }})
    
