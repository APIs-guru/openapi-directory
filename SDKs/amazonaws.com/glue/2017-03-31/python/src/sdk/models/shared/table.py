from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Table:
    r"""Table
    Represents a collection of related data organized in columns and rows.
    """
    
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    catalog_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CatalogId') }})
    create_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreateTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    created_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreatedBy') }})
    database_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DatabaseName') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    is_registered_with_lake_formation: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IsRegisteredWithLakeFormation') }})
    last_access_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastAccessTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_analyzed_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastAnalyzedTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    owner: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Owner') }})
    parameters: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Parameters') }})
    partition_keys: Optional[List[Column]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PartitionKeys') }})
    retention: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Retention') }})
    storage_descriptor: Optional[StorageDescriptor] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StorageDescriptor') }})
    table_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TableType') }})
    target_table: Optional[TableIdentifier] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TargetTable') }})
    update_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UpdateTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    view_expanded_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ViewExpandedText') }})
    view_original_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ViewOriginalText') }})
    
