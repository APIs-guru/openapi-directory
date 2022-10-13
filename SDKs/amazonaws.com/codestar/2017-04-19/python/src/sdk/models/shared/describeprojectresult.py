from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from . import projectstatus


@dataclass_json
@dataclass
class DescribeProjectResult:
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'arn' }})
    client_request_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clientRequestToken' }})
    created_time_stamp: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdTimeStamp', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    project_template_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'projectTemplateId' }})
    stack_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stackId' }})
    status: Optional[projectstatus.ProjectStatus] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
