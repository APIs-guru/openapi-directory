from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DataRepositoryTaskStatus:
    failed_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FailedCount' }})
    last_updated_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastUpdatedTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    succeeded_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SucceededCount' }})
    total_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TotalCount' }})
    
