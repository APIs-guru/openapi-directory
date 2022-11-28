from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BatchUpsertTableRowsResult:
    rows: dict[str, UpsertRowsResult] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('rows') }})
    workbook_cursor: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('workbookCursor') }})
    failed_batch_items: Optional[List[FailedBatchItem]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('failedBatchItems') }})
    
