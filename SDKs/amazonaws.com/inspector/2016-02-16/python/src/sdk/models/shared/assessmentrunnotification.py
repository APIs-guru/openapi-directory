from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import inspectorevent_enum
from . import assessmentrunnotificationsnsstatuscode_enum


@dataclass_json
@dataclass
class AssessmentRunNotification:
    date: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    error: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error' }})
    event: inspectorevent_enum.InspectorEventEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'event' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    sns_publish_status_code: Optional[assessmentrunnotificationsnsstatuscode_enum.AssessmentRunNotificationSnsStatusCodeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'snsPublishStatusCode' }})
    sns_topic_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'snsTopicArn' }})
    
