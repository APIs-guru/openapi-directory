from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AssessmentTarget:
    arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'arn' }})
    created_at: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    resource_group_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceGroupArn' }})
    updated_at: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updatedAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
