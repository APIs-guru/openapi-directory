from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import identity
from . import permission_enum
from . import resource


@dataclass_json
@dataclass
class AccessPolicySummary:
    creation_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creationDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    identity: identity.Identity = field(default=None, metadata={'dataclasses_json': { 'field_name': 'identity' }})
    last_update_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastUpdateDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    permission: permission_enum.PermissionEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'permission' }})
    resource: resource.Resource = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resource' }})
    
