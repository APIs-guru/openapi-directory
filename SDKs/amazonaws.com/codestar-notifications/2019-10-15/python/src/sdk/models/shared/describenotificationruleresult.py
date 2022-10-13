from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import detailtype_enum
from . import eventtypesummary
from . import notificationrulestatus_enum
from . import targetsummary


@dataclass_json
@dataclass
class DescribeNotificationRuleResult:
    arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Arn' }})
    created_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreatedBy' }})
    created_timestamp: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreatedTimestamp', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    detail_type: Optional[detailtype_enum.DetailTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DetailType' }})
    event_types: Optional[List[eventtypesummary.EventTypeSummary]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EventTypes' }})
    last_modified_timestamp: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastModifiedTimestamp', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    resource: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Resource' }})
    status: Optional[notificationrulestatus_enum.NotificationRuleStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    targets: Optional[List[targetsummary.TargetSummary]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Targets' }})
    
