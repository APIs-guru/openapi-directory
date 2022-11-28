from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateRowData:
    r"""CreateRowData
     Data needed to create a single row in a table as part of the BatchCreateTableRows request. 
    """
    
    batch_item_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('batchItemId') }})
    cells_to_create: dict[str, CellInput] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('cellsToCreate') }})
    
