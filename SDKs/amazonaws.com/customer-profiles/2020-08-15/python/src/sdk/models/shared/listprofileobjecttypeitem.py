from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ListProfileObjectTypeItem:
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreatedAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    last_updated_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastUpdatedAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    object_type_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ObjectTypeName' }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    
