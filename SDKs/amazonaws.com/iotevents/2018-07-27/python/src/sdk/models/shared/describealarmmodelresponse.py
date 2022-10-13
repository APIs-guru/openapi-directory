from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import alarmcapabilities
from . import alarmeventactions
from . import alarmnotification
from . import alarmrule
from . import alarmmodelversionstatus_enum


@dataclass_json
@dataclass
class DescribeAlarmModelResponse:
    alarm_capabilities: Optional[alarmcapabilities.AlarmCapabilities] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'alarmCapabilities' }})
    alarm_event_actions: Optional[alarmeventactions.AlarmEventActions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'alarmEventActions' }})
    alarm_model_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'alarmModelArn' }})
    alarm_model_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'alarmModelDescription' }})
    alarm_model_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'alarmModelName' }})
    alarm_model_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'alarmModelVersion' }})
    alarm_notification: Optional[alarmnotification.AlarmNotification] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'alarmNotification' }})
    alarm_rule: Optional[alarmrule.AlarmRule] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'alarmRule' }})
    creation_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creationTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    last_update_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastUpdateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'roleArn' }})
    severity: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'severity' }})
    status: Optional[alarmmodelversionstatus_enum.AlarmModelVersionStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    status_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'statusMessage' }})
    
