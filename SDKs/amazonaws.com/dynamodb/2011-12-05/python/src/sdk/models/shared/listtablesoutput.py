from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ListTablesOutput:
    last_evaluated_table_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastEvaluatedTableName' }})
    table_names: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TableNames' }})
    
