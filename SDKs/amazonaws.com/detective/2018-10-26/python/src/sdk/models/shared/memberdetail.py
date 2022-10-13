from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import memberdisabledreason_enum
from . import memberstatus_enum


@dataclass_json
@dataclass
class MemberDetail:
    account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AccountId' }})
    administrator_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AdministratorId' }})
    disabled_reason: Optional[memberdisabledreason_enum.MemberDisabledReasonEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DisabledReason' }})
    email_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EmailAddress' }})
    graph_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GraphArn' }})
    invited_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InvitedTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    master_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MasterId' }})
    percent_of_graph_utilization: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PercentOfGraphUtilization' }})
    percent_of_graph_utilization_updated_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PercentOfGraphUtilizationUpdatedTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    status: Optional[memberstatus_enum.MemberStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    updated_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UpdatedTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    volume_usage_in_bytes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VolumeUsageInBytes' }})
    volume_usage_updated_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VolumeUsageUpdatedTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
