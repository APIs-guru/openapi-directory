from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import failedbatchitem


@dataclass_json
@dataclass
class BatchCreateTableRowsResult:
    created_rows: dict[str, str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdRows' }})
    failed_batch_items: Optional[List[failedbatchitem.FailedBatchItem]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'failedBatchItems' }})
    workbook_cursor: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'workbookCursor' }})
    
