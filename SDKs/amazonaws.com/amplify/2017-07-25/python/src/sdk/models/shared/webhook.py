from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Webhook:
    branch_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'branchName' }})
    create_time: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    update_time: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    webhook_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'webhookArn' }})
    webhook_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'webhookId' }})
    webhook_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'webhookUrl' }})
    
