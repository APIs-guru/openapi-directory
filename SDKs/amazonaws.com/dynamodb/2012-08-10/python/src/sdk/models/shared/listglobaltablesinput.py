from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ListGlobalTablesInput:
    exclusive_start_global_table_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExclusiveStartGlobalTableName' }})
    limit: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Limit' }})
    region_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RegionName' }})
    
