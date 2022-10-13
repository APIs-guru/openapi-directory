from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import datastorestatus_enum


@dataclass_json
@dataclass
class DatastoreFilter:
    created_after: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreatedAfter', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    created_before: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreatedBefore', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    datastore_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DatastoreName' }})
    datastore_status: Optional[datastorestatus_enum.DatastoreStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DatastoreStatus' }})
    
