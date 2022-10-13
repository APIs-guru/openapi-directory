from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import cellinput


@dataclass_json
@dataclass
class UpdateRowData:
    cells_to_update: dict[str, cellinput.CellInput] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cellsToUpdate' }})
    row_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rowId' }})
    
