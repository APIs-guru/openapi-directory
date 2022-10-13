from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import format_enum


@dataclass_json
@dataclass
class TableColumn:
    format: Optional[format_enum.FormatEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'format' }})
    table_column_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tableColumnId' }})
    table_column_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tableColumnName' }})
    
