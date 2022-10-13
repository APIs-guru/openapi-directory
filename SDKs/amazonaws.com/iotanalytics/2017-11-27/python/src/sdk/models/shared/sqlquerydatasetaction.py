from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import queryfilter


@dataclass_json
@dataclass
class SQLQueryDatasetAction:
    filters: Optional[List[queryfilter.QueryFilter]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filters' }})
    sql_query: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sqlQuery' }})
    
