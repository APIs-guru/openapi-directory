from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import resultset


@dataclass_json
@dataclass
class GetScreenDataResult:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    results: dict[str, resultset.ResultSet] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'results' }})
    workbook_cursor: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'workbookCursor' }})
    
