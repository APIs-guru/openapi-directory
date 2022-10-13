from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import permissions_enum


@dataclass_json
@dataclass
class EnvironmentMember:
    environment_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'environmentId' }})
    last_access: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastAccess', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    permissions: permissions_enum.PermissionsEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'permissions' }})
    user_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userArn' }})
    user_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userId' }})
    
