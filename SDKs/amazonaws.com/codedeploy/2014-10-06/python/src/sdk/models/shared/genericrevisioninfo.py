from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GenericRevisionInfo:
    deployment_groups: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deploymentGroups' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    first_used_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'firstUsedTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_used_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastUsedTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    register_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'registerTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
