from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ListTablesInput:
    exclusive_start_table_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExclusiveStartTableName' }})
    limit: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Limit' }})
    
