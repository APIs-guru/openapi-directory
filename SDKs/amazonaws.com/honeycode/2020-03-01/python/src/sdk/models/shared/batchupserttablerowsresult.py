from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import failedbatchitem
from . import upsertrowsresult


@dataclass_json
@dataclass
class BatchUpsertTableRowsResult:
    failed_batch_items: Optional[List[failedbatchitem.FailedBatchItem]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'failedBatchItems' }})
    rows: dict[str, upsertrowsresult.UpsertRowsResult] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rows' }})
    workbook_cursor: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'workbookCursor' }})
    
