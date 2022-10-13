from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class InvokeScreenAutomationResult:
    workbook_cursor: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'workbookCursor' }})
    
