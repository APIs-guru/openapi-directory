from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import table


@dataclass_json
@dataclass
class ListTablesResult:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    tables: List[table.Table] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tables' }})
    workbook_cursor: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'workbookCursor' }})
    
