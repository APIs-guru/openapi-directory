from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PlacementDescription:
    attributes: dict[str, str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attributes' }})
    created_date: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    placement_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'placementName' }})
    project_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'projectName' }})
    updated_date: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updatedDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
