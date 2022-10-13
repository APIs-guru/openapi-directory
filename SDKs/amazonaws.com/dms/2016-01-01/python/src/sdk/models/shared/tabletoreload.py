from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class TableToReload:
    schema_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SchemaName' }})
    table_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TableName' }})
    
