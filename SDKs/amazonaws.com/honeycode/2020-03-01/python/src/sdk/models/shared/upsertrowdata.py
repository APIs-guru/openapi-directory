from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import cellinput
from . import filter


@dataclass_json
@dataclass
class UpsertRowData:
    batch_item_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'batchItemId' }})
    cells_to_update: dict[str, cellinput.CellInput] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cellsToUpdate' }})
    filter: filter.Filter = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filter' }})
    
