from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import storagedescriptor


@dataclass_json
@dataclass
class Partition:
    catalog_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CatalogId' }})
    creation_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreationTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    database_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DatabaseName' }})
    last_access_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastAccessTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_analyzed_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastAnalyzedTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    parameters: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Parameters' }})
    storage_descriptor: Optional[storagedescriptor.StorageDescriptor] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StorageDescriptor' }})
    table_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TableName' }})
    values: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Values' }})
    
