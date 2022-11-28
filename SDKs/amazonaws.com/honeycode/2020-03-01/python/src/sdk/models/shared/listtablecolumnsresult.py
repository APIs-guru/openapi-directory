from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListTableColumnsResult:
    table_columns: List[TableColumn] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('tableColumns') }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    workbook_cursor: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('workbookCursor') }})
    
