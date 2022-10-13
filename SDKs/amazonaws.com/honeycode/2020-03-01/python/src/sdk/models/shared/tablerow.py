from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import cell


@dataclass_json
@dataclass
class TableRow:
    cells: List[cell.Cell] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cells' }})
    row_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rowId' }})
    
