from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import columninfo


@dataclass_json
@dataclass
class ResultSetMetadata:
    column_info: Optional[List[columninfo.ColumnInfo]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ColumnInfo' }})
    
