from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import tablecolumn


@dataclass_json
@dataclass
class ListTableColumnsResult:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    table_columns: List[tablecolumn.TableColumn] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tableColumns' }})
    workbook_cursor: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'workbookCursor' }})
    
