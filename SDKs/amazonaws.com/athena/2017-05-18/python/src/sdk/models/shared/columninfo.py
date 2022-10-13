from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import columnnullable_enum


@dataclass_json
@dataclass
class ColumnInfo:
    case_sensitive: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CaseSensitive' }})
    catalog_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CatalogName' }})
    label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Label' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    nullable: Optional[columnnullable_enum.ColumnNullableEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Nullable' }})
    precision: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Precision' }})
    scale: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Scale' }})
    schema_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SchemaName' }})
    table_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TableName' }})
    type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }})
    
