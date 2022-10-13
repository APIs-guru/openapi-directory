from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class EstimatedResourceSize:
    estimated_on: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'estimatedOn', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    estimated_size_in_bytes: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'estimatedSizeInBytes' }})
    
