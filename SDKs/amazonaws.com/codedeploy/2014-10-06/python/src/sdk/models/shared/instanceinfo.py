from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import tag


@dataclass_json
@dataclass
class InstanceInfo:
    deregister_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deregisterTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    iam_session_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'iamSessionArn' }})
    iam_user_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'iamUserArn' }})
    instance_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instanceArn' }})
    instance_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instanceName' }})
    register_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'registerTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    
