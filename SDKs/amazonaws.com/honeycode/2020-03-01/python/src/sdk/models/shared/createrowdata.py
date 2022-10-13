from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import cellinput


@dataclass_json
@dataclass
class CreateRowData:
    batch_item_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'batchItemId' }})
    cells_to_create: dict[str, cellinput.CellInput] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cellsToCreate' }})
    
