from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import topicstatus_enum


@dataclass_json
@dataclass
class EventTopic:
    created_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreatedDateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    directory_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DirectoryId' }})
    status: Optional[topicstatus_enum.TopicStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    topic_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TopicArn' }})
    topic_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TopicName' }})
    
