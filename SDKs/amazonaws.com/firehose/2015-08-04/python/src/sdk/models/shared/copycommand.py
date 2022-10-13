from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CopyCommand:
    copy_options: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CopyOptions' }})
    data_table_columns: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DataTableColumns' }})
    data_table_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DataTableName' }})
    
