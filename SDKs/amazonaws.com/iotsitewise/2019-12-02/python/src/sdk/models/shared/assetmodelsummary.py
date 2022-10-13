from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from . import assetmodelstatus


@dataclass_json
@dataclass
class AssetModelSummary:
    arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'arn' }})
    creation_date: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creationDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    last_update_date: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastUpdateDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    status: assetmodelstatus.AssetModelStatus = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
