from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import status_enum


@dataclass_json
@dataclass
class GetEnrollmentStatusResponse:
    last_updated_timestamp: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastUpdatedTimestamp', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    member_accounts_enrolled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'memberAccountsEnrolled' }})
    number_of_member_accounts_opted_in: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'numberOfMemberAccountsOptedIn' }})
    status: Optional[status_enum.StatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    status_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'statusReason' }})
    
