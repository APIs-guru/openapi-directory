from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class VirtualRouterRef:
    arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'arn' }})
    created_at: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_updated_at: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastUpdatedAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    mesh_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meshName' }})
    mesh_owner: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meshOwner' }})
    resource_owner: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceOwner' }})
    version: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'version' }})
    virtual_router_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'virtualRouterName' }})
    
