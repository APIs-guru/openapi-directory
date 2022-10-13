from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import column
from . import column


@dataclass_json
@dataclass
class TableMetadata:
    columns: Optional[List[column.Column]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Columns' }})
    create_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_access_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastAccessTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    parameters: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Parameters' }})
    partition_keys: Optional[List[column.Column]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PartitionKeys' }})
    table_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TableType' }})
    
