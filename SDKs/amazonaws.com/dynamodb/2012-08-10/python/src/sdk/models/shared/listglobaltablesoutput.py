from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import globaltable


@dataclass_json
@dataclass
class ListGlobalTablesOutput:
    global_tables: Optional[List[globaltable.GlobalTable]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GlobalTables' }})
    last_evaluated_global_table_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastEvaluatedGlobalTableName' }})
    
