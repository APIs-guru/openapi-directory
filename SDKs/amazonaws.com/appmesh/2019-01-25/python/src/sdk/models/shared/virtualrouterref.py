from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class VirtualRouterRef:
    r"""VirtualRouterRef
    An object that represents a virtual router returned by a list operation.
    """
    
    arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('arn') }})
    created_at: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdAt'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_updated_at: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastUpdatedAt'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    mesh_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('meshName') }})
    mesh_owner: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('meshOwner') }})
    resource_owner: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceOwner') }})
    version: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    virtual_router_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('virtualRouterName') }})
    
