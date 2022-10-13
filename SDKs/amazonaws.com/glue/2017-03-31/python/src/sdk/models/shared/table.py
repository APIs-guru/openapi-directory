from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import column
from . import storagedescriptor
from . import tableidentifier


@dataclass_json
@dataclass
class Table:
    catalog_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CatalogId' }})
    create_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    created_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreatedBy' }})
    database_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DatabaseName' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    is_registered_with_lake_formation: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IsRegisteredWithLakeFormation' }})
    last_access_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastAccessTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_analyzed_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastAnalyzedTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    owner: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Owner' }})
    parameters: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Parameters' }})
    partition_keys: Optional[List[column.Column]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PartitionKeys' }})
    retention: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Retention' }})
    storage_descriptor: Optional[storagedescriptor.StorageDescriptor] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StorageDescriptor' }})
    table_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TableType' }})
    target_table: Optional[tableidentifier.TableIdentifier] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TargetTable' }})
    update_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UpdateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    view_expanded_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ViewExpandedText' }})
    view_original_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ViewOriginalText' }})
    
