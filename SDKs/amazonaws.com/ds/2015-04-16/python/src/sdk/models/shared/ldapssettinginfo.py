from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import ldapsstatus_enum


@dataclass_json
@dataclass
class LdapsSettingInfo:
    ldaps_status: Optional[ldapsstatus_enum.LdapsStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LDAPSStatus' }})
    ldaps_status_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LDAPSStatusReason' }})
    last_updated_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastUpdatedDateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
