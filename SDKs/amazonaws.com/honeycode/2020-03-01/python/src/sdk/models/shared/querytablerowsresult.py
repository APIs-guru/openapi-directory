from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import tablerow


@dataclass_json
@dataclass
class QueryTableRowsResult:
    column_ids: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'columnIds' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    rows: List[tablerow.TableRow] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rows' }})
    workbook_cursor: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'workbookCursor' }})
    
