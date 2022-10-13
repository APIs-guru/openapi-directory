from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GroupType:
    creation_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreationDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    group_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GroupName' }})
    last_modified_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastModifiedDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    precedence: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Precedence' }})
    role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RoleArn' }})
    user_pool_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UserPoolId' }})
    
