from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListTableRowsResult:
    column_ids: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('columnIds') }})
    rows: List[TableRow] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('rows') }})
    workbook_cursor: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('workbookCursor') }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    row_ids_not_found: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rowIdsNotFound') }})
    
